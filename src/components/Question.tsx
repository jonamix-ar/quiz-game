import { useState } from "react";

// Definimos la interfaz para una opción
interface Option {
  text: string;
  isCorrect: boolean;
}

// Definimos la interfaz para una pregunta
interface QuestionData {
  id: number;
  question: string;
  options: Option[];
}

// Definimos la interfaz para las props del componente Question
interface QuestionProps {
  question: QuestionData;
  onAnswer: (isCorrect: boolean) => void;
  totalQuestions: number;
  currentQuestion: number;
}

export default function Question({
  question,
  onAnswer,
  totalQuestions,
  currentQuestion,
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleSubmit = () => {
    if (selectedOption !== null && !isAnswered) {
      setIsAnswered(true);
      setTimeout(() => {
        onAnswer(question.options[selectedOption].isCorrect);
        setSelectedOption(null);
        setIsAnswered(false);
      }, 1000);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-sm font-medium text-gray-500">
        Pregunta {currentQuestion} de {totalQuestions}
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {question.question}
      </h2>
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => !isAnswered && setSelectedOption(index)}
            className={`w-full p-4 text-left rounded-lg transition-colors duration-300 ${
              isAnswered
                ? option.isCorrect
                  ? "bg-green-500 text-white"
                  : selectedOption === index
                  ? "bg-red-500 text-white"
                  : "bg-gray-100 text-gray-800"
                : selectedOption === index
                ? "bg-blue-500 text-white"
                : "bg-gray-100 text-gray-800 hover:bg-blue-100"
            }`}
            disabled={isAnswered}
          >
            {option.text}
          </button>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={selectedOption === null || isAnswered}
        className={`w-full py-3 px-6 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition-colors duration-300 ${
          selectedOption === null || isAnswered
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isAnswered ? "Siguiente" : "Confirmar respuesta"}
      </button>
    </div>
  );
}
