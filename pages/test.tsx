import React, { useState, useEffect } from "react";
import { NextSeo } from "next-seo";
import questions from "../resources/questions";
import { Question } from "../types/Question";
import { Points } from "../types/Points";
import Router from "next/router";
import Wrapper from "../components/Wrapper";

export default function Test() {
  const [number, setNumber] = useState<number>(0);
  const [question, setQuestion] = useState<Question>(questions[0]);
  const [points, setPoints] = useState<Points[]>([]);

  useEffect(() => {
    let temp: Points[] = [];
    for (let i = 1; i <= 10; i++) {
      temp.push({
        catId: i,
        points: 0,
        maxPoints: 0,
      });
    }
    setPoints(temp);
  }, []);

  useEffect(() => {
    setQuestion(questions[number]);
  }, [number]);

  const onAnswer = (i: number, count: number) => {
    let temp = points;

    // update points
    temp = temp.map((cat) => {
      if (question.answers[i].pointsFor.includes(cat.catId)) {
        return { ...cat, points: cat.points + count };
      } else {
        return cat;
      }
    });

    // update max points
    temp = temp.map((cat) => {
      if (question.answers.some((answer) => answer.pointsFor.includes(cat.catId))) {
        return { ...cat, maxPoints: cat.maxPoints + 1 };
      } else {
        return cat;
      }
    });
    console.log(temp);
    // set new points
    setPoints(temp);

    // check if another question exists
    if (questions.length - 1 === number) {
      let url = "";
      temp.forEach((cat, i) => {
        url += `${cat.catId}-${cat.points}-${cat.maxPoints}`;
        if (i !== points.length - 1) {
          url += ",";
        }
      });
      // redirect to result
      Router.push(`/result/${url}`);
    } else {
      // go to next question
      setNumber((n) => n + 1);
    }
  };

  return (
    <>
      <NextSeo title="Test" canonical="https://kittisaurus.hynekfisera.com/test" />
      <Wrapper>
        <h2 className="lg:text-lg text-gray-600 text-center -mb-2">
          Question {number + 1}/{questions.length}
        </h2>
        <h1 className="text-xl lg:text-2xl font-medium text-gray-800 text-center mb-4">{question.title}</h1>
        <div className="flex flex-col justify-center gap-4 w-full max-w-xs">
          {question.answers.length === 2 && (
            <>
              <div onClick={() => onAnswer(0, 1)} className="answer-primary">
                100% <strong>{question.answers[0].title}</strong>
              </div>
              <div onClick={() => onAnswer(0, 0.5)} className="answer-secondary">
                More <strong>{question.answers[0].title}</strong>
              </div>
              <div onClick={() => onAnswer(0, 0)} className="answer-tertiary">
                Don{"'"}t know
              </div>
              <div onClick={() => onAnswer(1, 0.5)} className="answer-secondary">
                More <strong>{question.answers[1].title}</strong>
              </div>
              <div onClick={() => onAnswer(1, 1)} className="answer-primary">
                100% <strong>{question.answers[1].title}</strong>
              </div>
            </>
          )}
          {question.answers.length !== 2 &&
            question.answers.map((answer, i) => (
              <div
                key={i}
                onClick={() => {
                  onAnswer(i, 1);
                }}
                className="answer-secondary"
              >
                {answer.title}
              </div>
            ))}
        </div>
      </Wrapper>
    </>
  );
}
