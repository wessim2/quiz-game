import Button from '@/components/ui/button/button';
import { shuffle } from '@/utils/helpers';
import clsx from 'clsx';
import { useMemo, useState } from 'react';

export const Question = ({ data }: any) => {
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [score, setScore] = useState(0);

  const questionAnswers = useMemo(() => {
    return data.map((item: any) => {
      const { question, correct_answer, incorrect_answers } = item;
      const answers = shuffle([...incorrect_answers, correct_answer]);
      return { question, answers, correct_answer };
    });
  }, [data]);

  const handleNextQuestion = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setIndex((prev) => prev - 1);
  };

  // calculate score in this func
  const handleSubmitQuizz = () => {
    const calculatedScore = Object.keys(selectedAnswers).reduce((acc, curr) => {
      const ind = parseInt(curr);
      if (selectedAnswers[ind] == questionAnswers[ind].correct_answer) {
        acc = acc + 1;
      }
      return acc;
    }, 0);
    setScore(calculatedScore);
  };

  const handleSelectedAnswer = (questionIndex: any, answer: any) => {
    setSelectedAnswers((prev: any) => ({ ...prev, [questionIndex]: answer }));
  };
  console.log(selectedAnswers);
  return (
    <>
      <p className="text-gray-typo font-bold">
        Question : {questionAnswers[index].question}
      </p>
      <ul className="flex flex-col gap-4">
        {questionAnswers[index].answers.map((answer: any) => {
          return (
            <Button
              key={answer}
              variant={'outline'}
              className={clsx('hover:bg-slate-300', {
                'border-yellow-400 border-4': selectedAnswers[index] === answer,
              })}
              onClick={() => handleSelectedAnswer(index, answer)}
            >
              {answer}
            </Button>
          );
        })}
      </ul>
      <div>
        <Button disabled={index == 0} onClick={handlePrevQuestion}>
          Previous
        </Button>
        {index == questionAnswers.length - 1 ? (
          <Button onClick={handleSubmitQuizz}>Submit</Button>
        ) : (
          <Button onClick={handleNextQuestion}>Next</Button>
        )}
      </div>
    </>
  );
};
