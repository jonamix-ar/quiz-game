import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const difficulty = searchParams.get("difficulty");

  let questionCount = 5; // default to easy
  if (difficulty === "medio") {
    questionCount = 10;
  } else if (difficulty === "dificil") {
    questionCount = 15;
  }

  try {
    const questions = await prisma.question.findMany({
      take: questionCount,
      include: {
        options: true,
      },
      orderBy: {
        id: "asc",
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
