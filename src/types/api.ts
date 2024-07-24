export type Category = {
    id: string,
    name : string
}

export type QuizQuestion = {
    type: 'multiple';
    difficulty: 'easy' | 'medium' | 'hard';
    category: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[] ;
  };


export type QuestionAnswers = {
    question: string;
    answers: string[];
    correct_answer: string;
  };