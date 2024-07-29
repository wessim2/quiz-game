import { Button } from '@/components/ui/button';
import Heading from '@/components/ui/heading/heading';
import { QuizContext } from '@/context/quiz-params-context';
import { useCategory } from '@/features/categories/api/get-category';
import { SelectQuizParams } from '@/features/quiz/components/select-quiz-params';
import { useContext, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

export const CategoryRoute = () => {
  // context
  const { setQuizParams } = useContext(QuizContext);

  const params = useParams();
  const navigate = useNavigate();

  const categoryId = params.categoryId as string;
  const { data: category, isLoading } = useCategory({ categoryId });

  useEffect(() => {
    setQuizParams((prev) => ({ ...prev, category: categoryId }));
  }, []);

  if (isLoading) return <p>Loading ....</p>;
  if (!category) return null;

  return (
    <div className="flex flex-col h-full justify-between gap-8">
      <div className="flex flex-col gap-y-4 items-start">
        <Heading>{category.name} Quiz</Heading>
        <p className="text-gray-typo ">Read the following instructions</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-x-10">
        <img
          src={'/categories/history.jpeg'}
          alt="category image"
          className="w-96 h-52 rounded-basic"
        />
        <div className="flex flex-row gap-2 mt-3">
          <SelectQuizParams />
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        <Heading size={'h3'}>Instructions : </Heading>
        <p>
          This quiz consists of 5 multiple-choice questions. To be successful
          with the quizzes, it’s important to conversant with the topics. Keep
          the following in mind:
          <br />
          Timing - You need to complete each of your attempts in one sitting, as
          you are allotted 30 minutes to each attempt. <br />
          Answers - You may review your answer-choices and compare them to the
          correct answers after your final attempt. To start, click the "Start"
          button. When finished, click the "Submit " button.
        </p>
      </div>
      <div className="flex flex-row justify-between ">
        <Button
          variant={'primary'}
          className="w-56 h-14 mb-3 lg:mb-0"
          onClick={() => {
            navigate(-1);
          }}
        >
          Return
        </Button>
        <Link to={{ pathname: '/app/quizz' }}>
          <Button variant={'primary'} className="w-56 h-14">
            Start
          </Button>
        </Link>
      </div>
    </div>
  );
};
