export type Question = {
  title: string;
  answers: Answer[];
};

export type Answer = {
  title: string;
  pointsFor: number[];
};
