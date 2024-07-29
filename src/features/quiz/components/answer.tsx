import Button from '@/components/ui/button/button';
import { clsx } from 'clsx';

type ButtonAnswerProps = {
  quizEnd: boolean;
  answer: string;
  setSelectedAnswers: React.Dispatch<
    React.SetStateAction<{ [key: number]: string }>
  >;
  index: number;
  questionAnswers: any;
  selectedAnswers: { [key: number]: string };
};

export const Answer = ({
  quizEnd,
  answer,
  index,
  questionAnswers,
  selectedAnswers,
  setSelectedAnswers,
}: ButtonAnswerProps) => {
  const handleSelectedAnswer = (questionIndex: any, answer: any) => {
    setSelectedAnswers((prev: any) => ({ ...prev, [questionIndex]: answer }));
  };

  return (
    <Button
      disabled={quizEnd}
      key={answer}
      variant={'outline'}
      className={clsx('hover:bg-slate-300 w-fit border-2 text-xl', {
        'border-yellow-400 border-4': selectedAnswers[index] === answer,
        'bg-green-400':
          quizEnd && questionAnswers[index].correct_answer === answer,
        'bg-red-500':
          quizEnd &&
          questionAnswers[index].answers.includes(selectedAnswers[index]) &&
          questionAnswers[index].correct_answer != answer &&
          selectedAnswers[index] === answer,
      })}
      onClick={() => handleSelectedAnswer(index, answer)}
    >
      {answer}
    </Button>
  );
};
