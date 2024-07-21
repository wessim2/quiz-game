import { useQuiz } from '@/features/quiz/get-quiz';
import { Question } from './question';

export const QuizzRoute = () => {
  const { data, isError, isLoading } = useQuiz();

  if (!data) return null;

  return (
    <div className="flex flex-col gap-6">
      <Question data={data} />
    </div>
  );
};
