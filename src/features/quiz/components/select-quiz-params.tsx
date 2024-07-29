import { QuizContext } from '@/context/quiz-params-context';
import { useContext, useEffect } from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
export const SelectQuizParams = () => {
  const { setQuizParams } = useContext(QuizContext);

  function handleDifficultyChange(value: string) {
    setQuizParams((prev) => ({ ...prev, difficulty: value }));
    console.log(value);
  }
  function handleTypeChange(value: string) {
    setQuizParams((prev) => ({ ...prev, type: value }));
    console.log(value);
  }

  return (
    <>
      <Select onValueChange={handleDifficultyChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Quizz Difficulty" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Quizz Difficulty</SelectLabel>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select onValueChange={handleTypeChange}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Quizz Type</SelectLabel>
            <SelectItem value="multiple">Multiple Choices</SelectItem>
            <SelectItem value="boolean">True / False</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};
