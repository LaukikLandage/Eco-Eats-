import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendMealNotification } from "@/lib/notifications";

export async function POST(req: Request) {
  try {
    const { senderId, receiverId, mealCreditId, note } = await req.json();

    if (!senderId || !receiverId || !mealCreditId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await prisma.$transaction(async (tx: any) => {
      // 1. Update meal credit owner
      const mealCredit = await tx.mealCredit.update({
        where: { id: mealCreditId },
        data: {
          studentId: receiverId,
          isListed: false, // Ensure it's not listed anymore
        },
      });

      // 2. Create transaction record
      const transaction = await tx.creditTransaction.create({
        data: {
          senderId,
          receiverId,
          amount: 1, // 1 meal credit
          type: "TRANSFER",
          note: note || "Meal Transfer",
        },
      });

      return { mealCredit, transaction };
    });

    sendMealNotification('received', { to: receiverId, from: senderId, meal: result.mealCredit.type });

    return NextResponse.json({ success: true, ...result });

  } catch (error: any) {
    console.error("Transfer Error:", error);
    return NextResponse.json({ error: "Failed to transfer credit", details: error.message }, { status: 500 });
  }
}
