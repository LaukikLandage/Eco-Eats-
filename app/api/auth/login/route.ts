import { NextResponse } from "next/server";
import { login } from "@/lib/auth";
import { adminAuth, adminDb } from "@/lib/firebase/admin";
import allowedEmails from "@/admin-allowlist.json";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { idToken, type } = body;

        if (!idToken || !type) {
            return NextResponse.json({ error: "Missing token or login type" }, { status: 400 });
        }

        // Verify Firebase ID Token
        const decodedToken = await adminAuth.verifyIdToken(idToken);
        const email = decodedToken.email;
        const uid = decodedToken.uid;

        if (!email) {
            return NextResponse.json({ error: "No email associated with this token" }, { status: 400 });
        }

        const studentsRef = adminDb.collection('students');

        // University portal logic
        if (type === "university") {
            if (!decodedToken.email_verified) {
                return NextResponse.json({ error: "Please verify your email address. Check your inbox." }, { status: 403 });
            }

            // Check if email is in the imported allowlist array
            if (!allowedEmails.includes(email)) {
                return NextResponse.json({ error: "Unauthorized access" }, { status: 403 });
            }

            const userDoc = await studentsRef.doc(uid).get();
            let userData = userDoc.data();

            if (!userDoc.exists) {
                userData = {
                    name: decodedToken.name || "University Admin",
                    email: email,
                    studentId: email.split("@")[0] || "admin",
                    university: "MIT ADT",
                    class: "Admin",
                    role: "admin",
                    credits: 0,
                    points: 0,
                    isVerified: true,
                    createdAt: new Date().toISOString()
                };
                await studentsRef.doc(uid).set(userData);
            } else if (userData?.role !== "admin") {
                await studentsRef.doc(uid).update({ role: "admin" });
                userData!.role = "admin";
            }

            await login({ id: uid, ...userData });
            return NextResponse.json({ message: "Login successful", user: { id: uid, ...userData } });
        }

        // Student portal logic
        if (type === "student") {
            const userDoc = await studentsRef.doc(uid).get();
            let userData = userDoc.data();

            if (!userDoc.exists) {
                // Auto-create account if using Google Auth instead of Email/Password signup
                userData = {
                    name: decodedToken.name || "Student",
                    email: email,
                    studentId: email.split("@")[0] || "student",
                    university: "MIT ADT",
                    class: "N/A",
                    role: "student",
                    credits: 100,
                    points: 0,
                    isVerified: false,
                    createdAt: new Date().toISOString()
                };
                await studentsRef.doc(uid).set(userData);
            }

            await login({ id: uid, ...userData });
            return NextResponse.json({ message: "Login successful", user: { id: uid, ...userData } });
        }

        return NextResponse.json({ error: "Invalid login type" }, { status: 400 });

    } catch (error: any) {
        console.error("[Login Error]:", error);
        return NextResponse.json({ error: error.message || "Authentication failed." }, { status: 401 });
    }
}
