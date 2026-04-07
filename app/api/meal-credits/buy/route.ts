import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendMealNotification } from "@/lib/notifications";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { buyerId, listingId } = await req.json();

    if (!buyerId || !listingId) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const result = await prisma.$transaction(async (tx: any) => {
      // 1. Get the listing
      const listing = await tx.marketplaceListing.findUniqueOrThrow({
        where: { id: listingId },
        include: { mealCredit: true },
      });

      if (!listing.isActive) {
          throw new Error("Listing is no longer active");
      }

      // 2. Transfer credit to buyer
      const mealCredit = await tx.mealCredit.update({
        where: { id: listing.mealCreditId },
        data: {
          studentId: buyerId,
          isListed: false,
        },
      });

      // 3. Mark listing as inactive
      const updatedListing = await tx.marketplaceListing.update({
        where: { id: listingId },
        data: { isActive: false },
      });

      // 4. Create transaction record for sale
      const transaction = await tx.creditTransaction.create({
        data: {
          senderId: listing.sellerId,
          receiverId: buyerId,
          amount: listing.price,
          type: "SALE",
          note: `Purchase of ${mealCredit.type} for ₹${listing.price}`,
        },
      });

      return { mealCredit, updatedListing, transaction };
    });

    sendMealNotification('success', { to: buyerId, meal: result.mealCredit.type, price: result.updatedListing.price });
    sendMealNotification('sold', { from: result.updatedListing.sellerId, meal: result.mealCredit.type, price: result.updatedListing.price });

    return NextResponse.json({ success: true, ...result });

  } catch (error: any) {
    console.error("Purchase Error:", error);
    return NextResponse.json({ error: "Failed to purchase credit", details: error.message }, { status: 500 });
  }
}
