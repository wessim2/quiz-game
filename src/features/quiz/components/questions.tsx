import { shuffle } from '@/utils/helpers';
import { useMemo } from 'react';
import { Question } from './question';
export const Questions = ({ data }: any) => {
  // changing the data format and randomize answers
  const questionAnswers = useMemo(() => {
    return data.map((item: any) => {
      const { question, correct_answer, incorrect_answers } = item;
      const answers = shuffle([...incorrect_answers, correct_answer]);
      return { question, answers, correct_answer };
    });
  }, [data]);

  return (
    <div>
      <Question questionAnswers={questionAnswers} />
    </div>
  );
};
