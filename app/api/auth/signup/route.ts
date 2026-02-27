import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, firstName, lastName, studentId, className } = body;

        const existingUser = await prisma.student.findFirst({
            where: {
                OR: [
                    { email: email },
                    { studentId: studentId }
                ]
            }
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email or student ID already exists" },
                { status: 400 }
            );
        }

        const student = await prisma.student.create({
            data: {
                name: `${firstName} ${lastName}`,
                email: email,
                password: "FirebaseManaged",
                studentId: studentId,
                university: "MIT ADT",
                class: className,
                role: "student",
                credits: 100,
                points: 0,
                isVerified: false,
            },
        });

        return NextResponse.json({ message: "Student registered successfully", studentId: student.id });
    } catch (error: any) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
