import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const questions = await prisma.question.findMany({
      include: {
        options: true,
      },
    });
    return NextResponse.json(questions);
  } catch (error) {
    console.error("Error fetching questions:", error);
    return NextResponse.json(
      { error: "Error fetching questions" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
