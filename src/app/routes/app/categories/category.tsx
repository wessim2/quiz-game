import Button from '@/components/ui/button/button';
import Heading from '@/components/ui/heading/heading';
import { useCategory } from '@/features/categories/api/get-category';
import { useNavigate, useParams } from 'react-router-dom';

export const CategoryRoute = () => {
  const params = useParams();
  const navigate = useNavigate();

  const categoryId = params.categoryId as string;

  const { data: category } = useCategory({ categoryId });
  console.log(category);
  if (!category) return null;

  return (
    <div className="flex flex-col h-full justify-between">
      <div className="felx flex-col gap-y-4">
        <Heading>{category.name} Quiz</Heading>
        <p className="text-gray-typo">Read the following instructions</p>
      </div>
      <div className="flex flex-row gap-x-10">
        <img
          src={'/categories/history.jpeg'}
          alt="category image"
          className="w-96 h-52 rounded-basic"
        />
        <div className="flex flex-row gap-2">
          <div className="flex flex-col gap-4">
            <p className="font-extrabold text-gray-typo text-2xl">Date :</p>
            <p className="font-extrabold text-gray-typo text-2xl">
              Time Limit :
            </p>
            <p className="font-extrabold text-gray-typo text-2xl">Attempts :</p>
            <p className="font-extrabold text-gray-typo text-2xl">points :</p>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-gray-typo text-2xl">13/10/2024</p>
            <p className="text-gray-typo text-2xl">30mins</p>
            <p className="text-gray-typo text-2xl">1</p>
            <p className="text-gray-typo text-2xl">200 points</p>
          </div>
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
      <div className="flex flex-row justify-between">
        <Button
          className="w-56 h-14"
          onClick={() => {
            navigate(-1);
          }}
        >
          Return
        </Button>
        <Button className="w-56 h-14">Start</Button>
      </div>
    </div>
  );
};
