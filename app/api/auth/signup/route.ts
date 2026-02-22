import { NextResponse } from "next/server";
import { signupSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = signupSchema.parse(body);

        const existingUser = await prisma.student.findFirst({
            where: {
                OR: [
                    { email: validatedData.email },
                    { studentId: validatedData.studentId }
                ]
            }
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "User with this email or student ID already exists" },
                { status: 400 }
            );
        }

        const hashedPassword = await bcrypt.hash(validatedData.password, 10);

        const student = await prisma.student.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                password: hashedPassword,
                studentId: validatedData.studentId,
                university: validatedData.university,
                class: validatedData.class,
                role: "student",
                credits: 100,
                points: 0,
                isVerified: false,
            },
        });

        return NextResponse.json({ message: "Student registered successfully", studentId: student.id });
    } catch (error: any) {
        if (error.name === "ZodError") {
            return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
