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
  {
    title: "Are you able to stay calm?",
    answers: [
      {
        title: "Calm",
        pointsFor: [2, 3, 4, 5, 6, 9],
      },
      {
        title: "Wild",
        pointsFor: [1, 7, 10]
      },
    ],
  },
  {
    title: "Are you smart?",
    answers: [
      {
        title: "Smart",
        pointsFor: [1, 2, 8],
      },
      {
        title: "Dull",
        pointsFor: [3, 4, 7],
      },
    ],
  },
  {
    title: "Are you feeling inconvenient or afraid of being touched?",
    answers: [
      {
        title: "Inconvenient",
        pointsFor: [1, 3, 5, 9, 10]
      },
      {
        title: "Convenient",
        pointsFor: [2, 4, 6, 7, 8]
      }
    ]
  },
  {
    title: "Are you a vocal type?",
    answers: [
      {
        title: "Vocal",
        pointsFor: [1, 7, 8]
      },
      {
        title: "Quiet",
        pointsFor: [2, 3, 4, 5, 6]
      }
    ]
  },
  {
    title: "Do you care about others?",
    answers: [
      {
        title: "Caring",
        pointsFor: [2, 3, 4, 5, 6, 8, 9]
      },
      {
        title: "Careless",
        pointsFor: [1, 7, 10]
      }
    ]
  }
];

export default questions;
