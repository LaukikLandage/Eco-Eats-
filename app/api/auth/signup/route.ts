import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase/admin";
import allowedEmails from "@/admin-allowlist.json";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, lastName, studentId, className, uid, type } = body;

        if (!uid || !type) {
            return NextResponse.json({ error: "Missing required Firebase UID or type" }, { status: 400 });
        }

        const studentsRef = adminDb.collection('students');

        // Security Check: If it's a university admin signup, double check allowlist on server
        if (type === "university") {
            if (!allowedEmails.includes(email)) {
                return NextResponse.json({ error: "Unauthorized access" }, { status: 403 });
            }

            // Create Admin Profile in Firestore
            await studentsRef.doc(uid).set({
                name: `${firstName} ${lastName}`,
                email: email,
                studentId: studentId || "admin",
                university: "MIT ADT",
                class: className || "Admin",
                role: "admin",
                credits: 0,
                points: 0,
                isVerified: false, // Email verification required before login
                createdAt: new Date().toISOString()
            });

            return NextResponse.json({ message: "Admin registered successfully", studentId: uid });
        }

        // Student Signup Branch
        if (type === "student") {
            // Check if studentId already exists in Firestore
            const existingStudentIdQuery = await studentsRef.where('studentId', '==', studentId).get();
            if (!existingStudentIdQuery.empty) {
                return NextResponse.json(
                    { error: "User with this student ID already exists" },
                    { status: 400 }
                );
            }

            // Create Student Profile in Firestore
            await studentsRef.doc(uid).set({
                name: `${firstName} ${lastName}`,
                email: email,
                studentId: studentId,
                university: "MIT ADT",
                class: className,
                role: "student",
                credits: 100,
                points: 0,
                isVerified: false,
                createdAt: new Date().toISOString()
            });

            return NextResponse.json({ message: "Student registered successfully", studentId: uid });
        }

        return NextResponse.json({ error: "Invalid signup type" }, { status: 400 });
    } catch (error: any) {
        console.error("Signup error mapping to Firestore:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
