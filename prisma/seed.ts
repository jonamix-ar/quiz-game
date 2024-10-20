import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const questions = [
    {
      question: "¿Cuál es la capital de Francia?",
      options: [
        { text: "París", isCorrect: true },
        { text: "Londres", isCorrect: false },
        { text: "Berlín", isCorrect: false },
        { text: "Madrid", isCorrect: false },
      ],
    },
    {
      question: "¿En qué año se descubrió América?",
      options: [
        { text: "1492", isCorrect: true },
        { text: "1500", isCorrect: false },
        { text: "1592", isCorrect: false },
        { text: "1400", isCorrect: false },
      ],
    },
    {
      question: "¿Cuál es el elemento  químico más abundante en el universo?",
      options: [
        { text: "Hidrógeno", isCorrect: true },
        { text: "Oxígeno", isCorrect: false },
        { text: "Carbono", isCorrect: false },
        { text: "Helio", isCorrect: false },
      ],
    },
    {
      question: "¿Quién escribió 'Cien años de soledad'?",
      options: [
        { text: "Gabriel García Márquez", isCorrect: true },
        { text: "Mario Vargas Llosa", isCorrect: false },
        { text: "Julio Cortázar", isCorrect: false },
        { text: "Isabel Allende", isCorrect: false },
      ],
    },
    {
      question: "¿En qué deporte se utiliza un green?",
      options: [
        { text: "Golf", isCorrect: true },
        { text: "Tenis", isCorrect: false },
        { text: "Fútbol", isCorrect: false },
        { text: "Baloncesto", isCorrect: false },
      ],
    },
    {
      question: "¿Cuál es el río más largo del mundo?",
      options: [
        { text: "Amazonas", isCorrect: true },
        { text: "Nilo", isCorrect: false },
        { text: "Yangtsé", isCorrect: false },
        { text: "Misisipi", isCorrect: false },
      ],
    },
    {
      question: "¿Quién pintó 'La noche estrellada'?",
      options: [
        { text: "Vincent van Gogh", isCorrect: true },
        { text: "Pablo Picasso", isCorrect: false },
        { text: "Leonardo da Vinci", isCorrect: false },
        { text: "Claude Monet", isCorrect: false },
      ],
    },
    {
      question: "¿Cuál es el planeta más grande del sistema solar?",
      options: [
        { text: "Júpiter", isCorrect: true },
        { text: "Saturno", isCorrect: false },
        { text: "Neptuno", isCorrect: false },
        { text: "Urano", isCorrect: false },
      ],
    },
    {
      question: "¿En qué año terminó la Segunda Guerra Mundial?",
      options: [
        { text: "1945", isCorrect: true },
        { text: "1939", isCorrect: false },
        { text: "1918", isCorrect: false },
        { text: "1950", isCorrect: false },
      ],
    },
    {
      question: "¿Cuál es el océano más grande?",
      options: [
        { text: "Pacífico", isCorrect: true },
        { text: "Atlántico", isCorrect: false },
        { text: "Índico", isCorrect: false },
        { text: "Ártico", isCorrect: false },
      ],
    },
    {
      question: "¿Quién escribió 'Romeo y Julieta'?",
      options: [
        { text: "William Shakespeare", isCorrect: true },
        { text: "Miguel de Cervantes", isCorrect: false },
        { text: "Jane Austen", isCorrect: false },
        { text: "Charles Dickens", isCorrect: false },
      ],
    },
    {
      question: "¿Cuál es el metal más abundante en la corteza terrestre?",
      options: [
        { text: "Aluminio", isCorrect: true },
        { text: "Hierro", isCorrect: false },
        { text: "Cobre", isCorrect: false },
        { text: "Oro", isCorrect: false },
      ],
    },
    {
      question: "¿Cuál es la montaña más alta del mundo?",
      options: [
        { text: "Monte Everest", isCorrect: true },
        { text: "K2", isCorrect: false },
        { text: "Kangchenjunga", isCorrect: false },
        { text: "Lhotse", isCorrect: false },
      ],
    },
    {
      question: "¿En qué año se fundó la ONU?",
      options: [
        { text: "1945", isCorrect: true },
        { text: "1918", isCorrect: false },
        { text: "1939", isCorrect: false },
        { text: "1950", isCorrect: false },
      ],
    },
    {
      question: "¿Cuál es el animal terrestre más rápido?",
      options: [
        { text: "Guepardo", isCorrect: true },
        { text: "León", isCorrect: false },
        { text: "Gacela", isCorrect: false },
        { text: "Leopardo", isCorrect: false },
      ],
    },
  ];

  for (const q of questions) {
    await prisma.question.create({
      data: {
        question: q.question,
        options: {
          create: q.options,
        },
      },
    });
  }

  console.log("Seed data inserted successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
