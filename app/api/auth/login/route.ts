import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validation";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { login } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = loginSchema.parse(body);
        const { type } = body; // 'university' or 'student'

        // Find user by email or studentId
        const user = await prisma.student.findFirst({
            where: {
                OR: [
                    { email: validatedData.email },
                    { studentId: validatedData.email }
                ]
            },
        });

        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Verify role matches selected portal
        if (type === "university" && user.role !== "admin") {
            return NextResponse.json({ error: "Access denied. Use Student Login." }, { status: 403 });
        }
        if (type === "student" && user.role !== "student") {
            return NextResponse.json({ error: "Access denied. Use University Login." }, { status: 403 });
        }

        const isPasswordValid = await bcrypt.compare(validatedData.password, user.password);

        if (!isPasswordValid) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        const { password, ...userWithoutPassword } = user;
        await login(userWithoutPassword);

        return NextResponse.json({
            message: "Login successful",
            user: userWithoutPassword
        });
    } catch (error: any) {
        if (error.name === "ZodError") {
            return NextResponse.json({ error: error.errors[0].message }, { status: 400 });
        }
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
