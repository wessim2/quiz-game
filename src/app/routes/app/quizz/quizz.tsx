import { useQuiz } from '@/features/quiz/api/get-quiz';
import { Questions } from '@/features/quiz/components/questions';

export const QuizzRoute = () => {
  const { data } = useQuiz();

  if (!data) return null;

  return (
    <div className="flex flex-col gap-6">
      <Questions data={data} />
    </div>
  );
};
