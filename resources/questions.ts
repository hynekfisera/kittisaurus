import { Question } from "../types/Question";

const questions: Question[] = [
  {
    title: "Are you an introvert or extrovert?",
    answers: [
      {
        title: "Introvert",
        pointsFor: [2, 5, 6, 8, 9, 10],
      },
      {
        title: "Extrovert",
        pointsFor: [1, 3, 4, 7],
      },
    ],
  },
  {
    title: "What's your favourite food?",
    answers: [
      {
        title: "Cereal",
        pointsFor: [6, 7, 10],
      },
      {
        title: "Bread",
        pointsFor: [4, 8],
      },
      {
        title: "McDonalds",
        pointsFor: [2, 3],
      },
      {
        title: "Anything",
        pointsFor: [1, 5, 9],
      },
    ],
  },
  {
    title: "Which of these things is the most 'you'?",
    answers: [
      {
        title: "Eating",
        pointsFor: [1, 2, 9],
      },
      {
        title: "Exercise",
        pointsFor: [3, 4],
      },
      {
        title: "Studying",
        pointsFor: [5, 6],
      },
      {
        title: "Socializing",
        pointsFor: [7, 8],
      },
      {
        title: "Games",
        pointsFor: [10],
      },
    ],
  },
  //Personality part, 1 - 5, most-unlikely - most-likely
  {
    title: "Are you able to stay calm?",
    answers: [
      {
        title: "Most calm",
        pointsFor: [[2, 5, 6],[3, 5, 9]]
      },
      {
        title: "Least calm",
        pointsFor: [[1, 10],[1, 10]]
      }
    ]
  },
  {
    title: "Are you smart?",
    answers: [
      {
        title: "Most smart",
        pointsFor: [[1, 2, 8],[2, 8]]
      },
      {
        title: "Least smart",
        pointsFor: [[3, 4, 7],[3]]
      }
    ]
  }
];

export default questions;
