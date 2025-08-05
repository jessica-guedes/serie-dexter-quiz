"use client";

import { useState } from 'react';
import { questions } from '@/data/questions';

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const handleAnswerClick = (selectedOption: number) => {
    if (selectedOption === questions[currentQuestion].correta) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="w-full max-w-xl space-y-8">
      {quizFinished ? (
        <div className="text-center">
          <h2 className="text-4xl font-normal text-red-600">Quiz Finalizado!</h2>
          <p className="mt-4 text-xl text-zinc-300">Sua pontuação final é: {score} de {questions.length}</p>
          {score > 6 && (
            <img 
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2JtYzZoYzlwbG42bzc3dzJ6am8ycXhya2F5MjFhZjhmczI2ZnFtaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kPyjid3UoPUd2MBtav/giphy.gif" 
              alt="Dexter GIF"
              className="mt-4 mx-auto"
            />
          )}
          {score < 6 && (
            <img 
              src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGJ0bm15bGVob3F4MjducnN4NXdkNmVyd3NmN3FpdGU4NzVkMmE2aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l46CzrD3AyhuwwjOo/giphy.gif" 
              alt="Thinking Dexter GIF"
              className="mt-4 mx-auto"
            />
          )}
          <button 
            onClick={restartQuiz} 
            className="mt-6 px-6 py-2 font-normal text-zinc-300 bg-red-600 rounded-lg transition-all"
          >
            Recomeçar
          </button>
        </div>
      ) : (
        <div>
                    <h2 className="text-2xl font-normal text-red-600 font-high">{
            questions[currentQuestion].titulo
          }</h2>
          <ul className="mt-6 space-y-4">
            {questions[currentQuestion].alternativas.map((option, index) => (
              <li key={index}>
                <button 
                  onClick={() => handleAnswerClick(index)} 
                                    className="w-full px-4 py-3 text-left text-zinc-300 bg-zinc-950 hover:bg-zinc-900  rounded-lg transition-all"
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}