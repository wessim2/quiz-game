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

export type UserProfile = {
  id: string,
  email: string,
  fullName: string,
  phoneNumber: string,
  achievements: string[],
  progress: UserMilestones,
  title: string,
  image: string // URL to the user's image
}

export type UserMilestones = {
  quiz_passed : number,
  fastest_time : number,
  correct_answers : number
}