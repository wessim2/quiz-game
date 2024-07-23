import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import {  QuizQuestion } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

export const getQuiz = async () : Promise<QuizQuestion[]> => {
  const response = await api.get("/api.php?amount=10&difficulty=easy&type=multiple");
    return response.data.results;
};

export const getQuizQueryOption = () => {
  return queryOptions({
    queryKey: ['quizz'],
    queryFn: () => getQuiz(),
  });
};

type UseQuizOptions = {
  queryConfig?: QueryConfig<typeof getQuizQueryOption>;
};

export const useQuiz = ({ queryConfig }: UseQuizOptions = {}) => {
  return useQuery({
    ...getQuizQueryOption(),
    ...queryConfig,
  });
};
