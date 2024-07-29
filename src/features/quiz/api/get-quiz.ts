import { api } from '@/lib/api-client';
import { QueryConfig } from '@/lib/react-query';
import {  QuizQuestion } from '@/types/api';
import { queryOptions, useQuery } from '@tanstack/react-query';

type GetQuizProps = {
  category : string | undefined,
    amount : number | undefined,
    difficulty : string | undefined,
    type : string | undefined
}

export const getQuiz = async ({category , amount , difficulty, type}:GetQuizProps) : Promise<QuizQuestion[]> => {
  const response = await api.get("/api.php",{params:{
    category : category ?? "",
    amount : amount ?? 10,
    difficulty : difficulty ?? "",
    type : type ?? ""
  }});
    return response.data.results;
};

export const getQuizQueryOption = ({category , amount , difficulty, type}:GetQuizProps) => {
  return queryOptions({
    queryKey: ['quizz',category , amount , difficulty, type],
    queryFn: () => getQuiz({category , amount , difficulty, type}),
  });
};

type UseQuizOptions = {
  queryConfig?: QueryConfig<typeof getQuizQueryOption>;
  params : GetQuizProps
};

export const useQuiz = ({ queryConfig, params }: UseQuizOptions = {params:{
  amount : 10,
  difficulty : "",
  category : "",
  type: ""
}}) => {
  return useQuery({
    ...getQuizQueryOption(params),
    ...queryConfig,
  });
};
