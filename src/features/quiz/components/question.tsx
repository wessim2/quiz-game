import Button from '@/components/ui/button/button';
import { removeCharacters } from '@/utils/helpers';
import { useState } from 'react';
import { AlertSubmitQuiz } from './alert-submit-quizz';
import { Answer } from './answer';
import { Timer } from './timer';
import { Score } from './score';
import { QuestionAnswers } from '@/types/api';

type QuestionProps = {
  questionAnswers: QuestionAnswers[];
};

export const Question: React.FC<QuestionProps> = ({ questionAnswers }) => {
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [quizEnd, setQuizEnd] = useState(false);

  const handleQuestionNavigation = (step: number) => {
    setIndex((prev) => prev + step);
  };

  const handleSubmitQuizz = () => {
    setQuizEnd(true);
  };

  return (
    <>
      <p className=" text-gray-typo font-bold">
        Question : {removeCharacters(questionAnswers[index].question)}
      </p>
      <Timer
        quizEnd={quizEnd}
        seconds={60}
        handleSubmitQuizz={handleSubmitQuizz}
      />
      <ul className="flex flex-col gap-4">
        {questionAnswers[index].answers.map((answer: any) => {
          return (
            <Answer
              key={answer}
              answer={answer}
              index={index}
              questionAnswers={questionAnswers}
              quizEnd={quizEnd}
              selectedAnswers={selectedAnswers}
              setSelectedAnswers={setSelectedAnswers}
            />
          );
        })}
      </ul>
      <div>
        <Button
          disabled={index == 0}
          onClick={() => handleQuestionNavigation(-1)}
        >
          Previous
        </Button>
        {index == questionAnswers.length - 1 ? (
          <AlertSubmitQuiz
            quizEnd={quizEnd}
            handleSubmitQuizz={handleSubmitQuizz}
          />
        ) : (
          <Button onClick={() => handleQuestionNavigation(1)}>Next</Button>
        )}
      </div>
      {quizEnd && (
        <Score
          selectedAnswers={selectedAnswers}
          questionAnswers={questionAnswers}
        />
      )}
    </>
  );
};
