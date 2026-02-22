import { NextResponse } from 'next/server';
import { z } from 'zod';

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Invalid email address'),
    phone: z.string().optional(),
    subject: z.string().min(1, 'Please select a subject'),
    message: z.string().min(10, 'Message must be at least 10 characters'),
});

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validatedData = contactSchema.parse(body);

        // In a real application, you would:
        // 1. Store this in your database (e.g., prisma.contactSubmission.create({ ... }))
        // 2. Send an email to admin (e.g., using Resend or Nodemailer)

        console.log('Contact form submission:', validatedData);

        return NextResponse.json(
            { message: 'Thank you! Our team will contact you soon.' },
            { status: 200 }
        );
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                { error: error.issues[0].message },
                { status: 400 }
            );
        }
        return NextResponse.json(
            { error: 'Something went wrong. Please try again later.' },
            { status: 500 }
        );
    }
}
