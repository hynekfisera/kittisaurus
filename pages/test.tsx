import React, { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import questions from "../resources/questions";
import { Question } from "../types/Question";
import { Points } from "../types/Points";

type Props = {};

export default function Test({}: Props) {
  const [number, setNumber] = useState<number>(0);
  const [question, setQuestion] = useState<Question>(questions[0]);
  const [points, setPoints] = useState<Points[]>([]);

  useEffect(() => {
    for (let i = 1; i <= 10; i++) {
      points.push({
        catId: i,
        points: 0,
        maxPoints: 0,
      });
    }
  }, []);

  useEffect(() => {
    setQuestion(questions[number]);
  }, [number]);

  const onAnswer = (id: number) => {
    setNumber((n) => n + 1);
  };

  return (
    <>
      <NextSeo title="Test" />
      <main className="bg-gradient-to-br from-rose-200 to-orange-200 min-h-screen flex items-center">
        <section className="max-w-screen-md mx-auto px-4 md:px-0 flex flex-col items-center gap-4">
          <h1 className="text-xl lg:text-2xl xl:text-3xl font-semibold text-gray-900 text-center">{question.title}</h1>
          <div className="flex justify-center gap-4">
            {question.answers.map((answer, i) => (
              <div
                key={i}
                onClick={() => {
                  onAnswer(i);
                }}
              >
                {answer.title}
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
