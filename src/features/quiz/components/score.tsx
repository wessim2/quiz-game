import Heading from '@/components/ui/heading/heading';
import { useEffect, useState } from 'react';

type ScoreProps = {
  selectedAnswers: { [key: number]: string };
  questionAnswers: any;
};

export const Score = ({ selectedAnswers, questionAnswers }: ScoreProps) => {
  const [score, setScore] = useState(0);

  useEffect(() => {
    const calculatedScore = Object.keys(selectedAnswers).reduce((acc, curr) => {
      const ind = parseInt(curr);
      if (selectedAnswers[ind] === questionAnswers[ind].correct_answer) {
        acc++;
      }
      return acc;
    }, 0);
    setScore(calculatedScore);
  }, [selectedAnswers, questionAnswers]);

  return <Heading>Your Score is {score}</Heading>;
};
