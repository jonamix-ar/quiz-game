"use client";

import { useState, useEffect } from "react";
import Question from "@/components/Question";
import Result from "@/components/Result";
import StartScreen from "@/components/StartScreen";

interface QuestionData {
  id: number;
  question: string;
  options: { text: string; isCorrect: boolean }[];
}

export default function Quiz() {
  const [questions, setQuestions] = useState<QuestionData[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted) {
      fetchQuestions();
    }
  }, [gameStarted, difficulty]);

  const fetchQuestions = async () => {
    const response = await fetch(`/api/questions?difficulty=${difficulty}`);
    const data = await response.json();
    setQuestions(data);
  };

  const handleStart = (name: string, diff: string) => {
    setPlayerName(name);
    setDifficulty(diff);
    setGameStarted(true);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setShowResult(false);
    setGameStarted(false);
  };

  if (!gameStarted) {
    return <StartScreen onStart={handleStart} />;
  }

  if (questions.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (showResult) {
    return (
      <Result
        score={score}
        total={questions.length}
        playerName={playerName}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Quiz JonaMiX
          </h1>
          <Question
            question={questions[currentQuestionIndex]}
            onAnswer={handleAnswer}
            totalQuestions={questions.length}
            currentQuestion={currentQuestionIndex + 1}
          />
        </div>
      </div>
    </div>
  );
}
