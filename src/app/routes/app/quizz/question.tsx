import Button from '@/components/ui/button/button';
import { formatTime, removeCharacters, shuffle } from '@/utils/helpers';
import { useEffect, useMemo, useState } from 'react';
import { AlertSubmitQuiz } from './AlertSubmitQuiz';
import Heading from '@/components/ui/heading/heading';
import { ButtonAnswer } from './ButtonAnswer';

export const Question = ({ data }: any) => {
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{
    [key: number]: string;
  }>({});
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);

  const questionAnswers = useMemo(() => {
    return data.map((item: any) => {
      const { question, correct_answer, incorrect_answers } = item;
      const answers = shuffle([...incorrect_answers, correct_answer]);
      return { question, answers, correct_answer };
    });
  }, [data]);

  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      handleSubmitQuizz();
    }
  }, [timeLeft]);

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
        acc++;
      }
      return acc;
    }, 0);
    setScore(calculatedScore);
    setQuizEnd(true);
  };

  const handleSelectedAnswer = (questionIndex: any, answer: any) => {
    setSelectedAnswers((prev: any) => ({ ...prev, [questionIndex]: answer }));
  };

  return (
    <>
      <p className=" text-gray-typo font-bold">
        Question : {removeCharacters(questionAnswers[index].question)}
      </p>
      <p>Time Left : {formatTime(timeLeft)}</p>
      <ul className="flex flex-col gap-4">
        {questionAnswers[index].answers.map((answer: any) => {
          return (
            <ButtonAnswer
              answer={answer}
              handleSelectedAnswer={handleSelectedAnswer}
              index={index}
              questionAnswers={questionAnswers}
              quizEnd={quizEnd}
              selectedAnswers={selectedAnswers}
              key={answer}
            />
          );
        })}
      </ul>
      <div>
        <Button disabled={index == 0} onClick={handlePrevQuestion}>
          Previous
        </Button>
        {index == questionAnswers.length - 1 ? (
          <AlertSubmitQuiz
            quizEnd={quizEnd}
            handleSubmitQuizz={handleSubmitQuizz}
            score={score}
            setQuizEnd={setQuizEnd}
          />
        ) : (
          <Button onClick={handleNextQuestion}>Next</Button>
        )}
      </div>
      {quizEnd && <Heading>Your Score is {score}</Heading>}
    </>
  );
};
