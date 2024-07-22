import Button from '@/components/ui/button/button';
import clsx from 'clsx';

type ButtonAnswerProps = {
  quizEnd: boolean;
  answer: string;
  selectedAnswers: {
    [key: number]: string;
  };
  index: number;
  questionAnswers: any;
  handleSelectedAnswer: (index: number, answer: string) => void;
};

export const ButtonAnswer = ({
  quizEnd,
  answer,
  selectedAnswers,
  index,
  questionAnswers,
  handleSelectedAnswer,
}: ButtonAnswerProps) => {
  return (
    <Button
      disabled={quizEnd}
      key={answer}
      variant={'outline'}
      className={clsx('hover:bg-slate-300 w-fit', {
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
