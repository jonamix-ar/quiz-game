import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.question.create({
    data: {
      question: "¿Cuál es la capital de Francia?",
      options: {
        create: [
          { text: "París", isCorrect: true },
          { text: "Londres", isCorrect: false },
          { text: "Berlín", isCorrect: false },
          { text: "Madrid", isCorrect: false },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: "¿En qué año se descubrió América?",
      options: {
        create: [
          { text: "1492", isCorrect: true },
          { text: "1500", isCorrect: false },
          { text: "1592", isCorrect: false },
          { text: "1400", isCorrect: false },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: "¿Cuál es el elemento químico más abundante en el universo?",
      options: {
        create: [
          { text: "Hidrógeno", isCorrect: true },
          { text: "Oxígeno", isCorrect: false },
          { text: "Carbono", isCorrect: false },
          { text: "Helio", isCorrect: false },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: '¿Quién escribió "Cien años de soledad"?',
      options: {
        create: [
          { text: "Gabriel García Márquez", isCorrect: true },
          { text: "Mario Vargas Llosa", isCorrect: false },
          { text: "Julio Cortázar", isCorrect: false },
          { text: "Isabel Allende", isCorrect: false },
        ],
      },
    },
  });

  await prisma.question.create({
    data: {
      question: "¿En qué deporte se utiliza un green?",
      options: {
        create: [
          { text: "Golf", isCorrect: true },
          { text: "Tenis", isCorrect: false },
          { text: "Fútbol", isCorrect: false },
          { text: "Baloncesto", isCorrect: false },
        ],
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
