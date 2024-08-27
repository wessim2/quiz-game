import * as React from 'react';
import { createContext, useState } from 'react';

type QuizParams = {
  category: string | undefined;
  amount: number | undefined;
  difficulty: string | undefined;
  type: string | undefined;
};

type QuizContextType = {
  quizParams: QuizParams;
  setQuizParams: React.Dispatch<React.SetStateAction<QuizParams>>;
};

const initialState: QuizParams = {
  category: undefined,
  amount: 10,
  difficulty: undefined,
  type: undefined,
};
export const QuizContext = createContext<QuizContextType>(
  {} as QuizContextType,
);

export const QuizProvider = ({ children }: React.PropsWithChildren) => {
  const [quizParams, setQuizParams] = useState<QuizParams>(initialState);

  return (
    <QuizContext.Provider value={{ quizParams, setQuizParams }}>
      {children}
    </QuizContext.Provider>
  );
};
