import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { login } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = loginSchema.parse(body);

        const student = await prisma.student.findUnique({
            where: { email: validatedData.email },
        });

        if (!student) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const isPasswordValid = await bcrypt.compare(validatedData.password, student.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        if (!student.isVerified) {
            // For demo purposes, we might want to allow non-verified students but with limited access
            // But based on requirement "Until verified → limited access"
            // We'll allow login but the UI will show limited features
        }

        const { password, ...userWithoutPassword } = student;
        await login(userWithoutPassword);

        return NextResponse.json({ message: "Login successful", user: userWithoutPassword });
    } catch (error: any) {
        if (error.name === "ZodError") {
            return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
