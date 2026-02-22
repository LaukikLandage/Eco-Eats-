import { z } from "zod";

export const signupSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    university: z.string().min(2, "University is required"),
    studentId: z.string().min(2, "Student ID is required"),
    class: z.string().min(1, "Class is required"),
    email: z.string().email("Invalid email").refine(
        (email) => email.endsWith("@mitadt.edu.in"),
        { message: "Only @mitadt.edu.in emails are allowed" }
    ),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const loginSchema = z.object({
    email: z.string().min(1, "ID or Email is required"),
    password: z.string().min(1, "Password is required"),
});

export const feedbackSchema = z.object({
    mealType: z.string(),
    wasteLevel: z.string(),
    comments: z.string().optional(),
    location: z.string().optional(),
});

export const transferSchema = z.object({
    receiverId: z.string().min(1, "Receiver is required"),
    amount: z.number().positive("Amount must be positive"),
    note: z.string().optional(),
});
