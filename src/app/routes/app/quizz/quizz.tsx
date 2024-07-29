import { QuizContext } from '@/context/quiz-params-context';
import { useQuiz } from '@/features/quiz/api/get-quiz';
import { Questions } from '@/features/quiz/components/questions';
import { useContext } from 'react';

export const QuizzRoute = () => {
  const { quizParams } = useContext(QuizContext);
  const { data, isLoading } = useQuiz({
    params: quizParams,
  });

  if (!data) return null;

  if (isLoading) return <p>Loading ....</p>;

  return (
    <div className="flex flex-col gap-6">
      <Questions data={data} />
    </div>
  );
};
