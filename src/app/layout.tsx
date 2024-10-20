import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jona Quiz Game - Desafía tu conocimiento",
  description:
    "Juega al divertido e interactivo juego de preguntas y respuestas, pon a prueba tu conocimiento y mejora tus habilidades. ¡Compite para obtener la mayor puntuación!",
  openGraph: {
    title: "Jona Quiz Game",
    description:
      "Pon a prueba tu conocimiento con este divertido juego de preguntas y respuestas. ¡Juega y compite por la mayor puntuación!",
    url: "https://quiz.nextweb.com.ar",
    siteName: "Trivia Quiz Game",
    images: [
      {
        url: "/images/images/android-chrome-512x512.png",
        width: 800,
        height: 600,
        alt: "Imagen del juego de preguntas y respuestas",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trivia Quiz Game",
    description:
      "Un juego de preguntas y respuestas para desafiar tu conocimiento y divertirte.",
    images: ["/images/images/android-chrome-512x512.png"],
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/apple-touch-icon.png",
    shortcut: "/images/favicon-32x32.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
