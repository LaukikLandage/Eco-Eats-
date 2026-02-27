import { NextResponse } from "next/server";
import allowedEmails from "@/admin-allowlist.json";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = body;

        if (!email) {
            return NextResponse.json({ error: "Missing email" }, { status: 400 });
        }

        const isAllowed = allowedEmails.includes(email);

        return NextResponse.json({ isAllowed });
    } catch (error) {
        console.error("Allowlist check error:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
