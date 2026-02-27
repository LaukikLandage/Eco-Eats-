import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { login } from "@/lib/auth";
import { adminAuth } from "@/lib/firebase/admin";
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

        if (!email) {
            return NextResponse.json({ error: "No email associated with this token" }, { status: 400 });
        }

        // University portal logic
        if (type === "university") {
            // Check if email is in the imported allowlist array
            if (!allowedEmails.includes(email)) {
                return NextResponse.json({ error: "Unauthorized access" }, { status: 403 });
            }

            let user = await prisma.student.findUnique({ where: { email } });
            if (!user) {
                user = await prisma.student.create({
                    data: {
                        name: decodedToken.name || "University Admin",
                        email: email,
                        password: "FirebaseManaged",
                        studentId: email.split("@")[0] || "admin",
                        university: "MIT ADT",
                        class: "Admin",
                        role: "admin",
                        credits: 0,
                        points: 0,
                        isVerified: true,
                    }
                });
            } else if (user.role !== "admin") {
                user = await prisma.student.update({
                    where: { email },
                    data: { role: "admin" }
                });
            }

            const { password: _, ...userWithoutPassword } = user;
            await login(userWithoutPassword);
            return NextResponse.json({ message: "Login successful", user: userWithoutPassword });
        }

        // Student portal logic
        if (type === "student") {
            let user = await prisma.student.findUnique({ where: { email } });

            if (!user) {
                // Auto-create account if using Google Auth
                user = await prisma.student.create({
                    data: {
                        name: decodedToken.name || "Student",
                        email: email,
                        password: "FirebaseManaged",
                        studentId: email.split("@")[0] || "student",
                        university: "MIT ADT",
                        class: "N/A",
                        role: "student",
                        credits: 100,
                        points: 0,
                        isVerified: false,
                    }
                });
            }

            const { password: _, ...userWithoutPassword } = user;
            await login(userWithoutPassword);
            return NextResponse.json({ message: "Login successful", user: userWithoutPassword });
        }

        return NextResponse.json({ error: "Invalid login type" }, { status: 400 });

    } catch (error: any) {
        console.error("[Login Error]:", error);
        return NextResponse.json({ error: "Authentication failed. Token invalid or expired." }, { status: 401 });
    }
}
