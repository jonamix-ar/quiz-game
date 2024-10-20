"use client";

import { useState, useEffect } from "react";
import Question from "@/components/Question";
import Result from "@/components/Result";

export default function Quiz() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    fetch("/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(score + 1);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  if (questions.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );

  if (showResult) return <Result score={score} total={questions.length} />;

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
