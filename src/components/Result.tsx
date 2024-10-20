export default function Result({ score, total }) {
  const percentage = (score / total) * 100;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            Resultado Final
          </h2>
          <p className="text-xl mb-4">
            Tu puntuación:{" "}
            <span className="font-bold text-green-500">{score}</span> de {total}
          </p>
          <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
            <div
              className="bg-blue-500 h-4 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
          <p className="text-lg font-semibold text-gray-700">
            Porcentaje de aciertos: {percentage.toFixed(2)}%
          </p>
          {percentage === 100 && (
            <p className="mt-4 text-xl font-bold text-green-500">
              ¡Perfecto! Has acertado todas las preguntas.
            </p>
          )}
          {percentage >= 70 && percentage < 100 && (
            <p className="mt-4 text-xl font-bold text-blue-500">
              ¡Buen trabajo! Has superado el quiz.
            </p>
          )}
          {percentage < 70 && (
            <p className="mt-4 text-xl font-bold text-yellow-500">
              Sigue practicando para mejorar tu puntuación.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
