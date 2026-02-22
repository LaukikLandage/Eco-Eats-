export type UserRole = "student" | "admin";

export interface Student {
    id: string;
    name: string;
    email: string;
    studentId: string;
    university: string;
    class: string;
    role: UserRole;
    credits: number;
    points: number;
    isVerified: boolean;
    profilePhoto?: string;
    createdAt: Date;
}

export interface Feedback {
    id: string;
    studentId: string;
    mealType: string;
    wasteLevel: "low" | "medium" | "high" | "none";
    comments?: string;
    createdAt: Date;
}

export interface RewardRedemption {
    id: string;
    studentId: string;
    rewardName: string;
    pointsUsed: number;
    createdAt: Date;
}

export interface CreditTransaction {
    id: string;
    senderId: string;
    receiverId: string;
    amount: number;
    note?: string;
    createdAt: Date;
}
