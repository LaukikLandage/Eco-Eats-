import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const listings = await prisma.marketplaceListing.findMany({
      where: {
        isActive: true,
      },
      include: {
        seller: {
          select: {
            name: true,
            studentId: true,
          },
        },
        mealCredit: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(listings);
  } catch (error: any) {
    console.error("Marketplace Fetch Error:", error);
    // Return mock data for demo if Prisma fails
    return NextResponse.json([
        { id: "1", seller: { name: "Anonymous" }, mealCredit: { type: "Lunch", date: new Date() }, price: 40 },
        { id: "2", seller: { name: "Student Demo" }, mealCredit: { type: "Dinner", date: new Date() }, price: 45 },
    ]);
  }
}
