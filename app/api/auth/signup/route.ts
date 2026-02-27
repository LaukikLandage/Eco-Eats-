import { NextResponse } from "next/server";
import { adminDb } from "@/lib/firebase/admin";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, lastName, studentId, className, uid } = body;

        if (!uid) {
            return NextResponse.json({ error: "Missing Firebase UID" }, { status: 400 });
        }

        const studentsRef = adminDb.collection('students');

        // Check if studentId already exists in Firestore
        const existingStudentIdQuery = await studentsRef.where('studentId', '==', studentId).get();
        if (!existingStudentIdQuery.empty) {
            return NextResponse.json(
                { error: "User with this student ID already exists" },
                { status: 400 }
            );
        }

        // Create the user profile in Firestore
        // Using the Firebase Auth UID as the Firestore document ID for direct mapping
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
    } catch (error: any) {
        console.error("Signup error mapping to Firestore:", error);
        return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
    }
}
