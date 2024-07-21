import Button from '@/components/ui/button/button';
import { shuffle } from '@/utils/helpers';
import { useMemo, useState } from 'react';

export const QuizzRoute = () => {
  const [index, setIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const data = [
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Entertainment: Video Games',
      question:
        'Which Game Boy from the Game Boy series of portable video game consoles was released first?',
      correct_answer: 'Game Boy Color',
      incorrect_answers: [
        'Game Boy Advance',
        'Game Boy Micro',
        'Game Boy Advance SP',
      ],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Vehicles',
      question: 'The LS2 engine is how many cubic inches?',
      correct_answer: '364',
      incorrect_answers: ['346', '376', '402'],
    },
    {
      type: 'multiple',
      difficulty: 'easy',
      category: 'Entertainment: Video Games',
      question:
        'In World of Warcraft the default UI color that signifies Druid is what?',
      correct_answer: 'Orange',
      incorrect_answers: ['Brown', 'Green', 'Blue'],
    },
  ];

  const questionAnswers = useMemo(() => {
    return data.map((item) => {
      const { question, correct_answer, incorrect_answers } = item;
      const answers = shuffle([...incorrect_answers, correct_answer]);
      return { question, answers, correct_answer };
    });
  }, [index]);

  const handleNextQuestion = () => {
    setIndex((prev) => prev + 1);
  };

  const handlePrevQuestion = () => {
    setIndex((prev) => prev - 1);
  };

  const handleSubmitQuizz = () => {};

  const handleSelectedAnswer = (questionIndex: any, answer: any) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };
  console.log(selectedAnswers);
  return (
    <div className="flex flex-col gap-6">
      <p className="text-gray-typo font-bold">
        Question : {questionAnswers[index].question}
      </p>
      <ul className="flex flex-col gap-4">
        {questionAnswers[index].answers.map((answer) => {
          return (
            <Button
              key={answer}
              variant={'outline'}
              className="hover:bg-slate-300"
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
    </div>
  );
};
