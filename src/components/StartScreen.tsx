import { useState } from "react";

interface StartScreenProps {
  onStart: (playerName: string, difficulty: string) => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  const [playerName, setPlayerName] = useState("");
  const [difficulty, setDifficulty] = useState("facil");

  const handleStart = () => {
    if (playerName.trim()) {
      onStart(playerName, difficulty);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
            Quiz JonaMiX
          </h1>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="playerName"
                className="block pb-2 text-sm font-medium text-gray-700 dark:text-white"
              >
                Nombre del jugador
              </label>
              <input
                type="text"
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Ingresa tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="difficulty"
                className="block pb-2 text-sm font-medium text-gray-700 dark:text-white"
              >
                Nivel de dificultad
              </label>
              <select
                id="difficulty"
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="block w-full p-4  text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="facil">Fácil (5 preguntas)</option>
                <option value="medio">Medio (10 preguntas)</option>
                <option value="dificil">Difícil (15 preguntas)</option>
              </select>
            </div>
            <button
              onClick={handleStart}
              disabled={!playerName.trim()}
              className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 w-full"
            >
              Comenzar Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
