import { formatTime } from '@/utils/helpers';
import { useEffect, useState } from 'react';

type TimerProps = {
  handleSubmitQuizz: () => void;
  seconds: number;
  quizEnd: boolean;
};

export const Timer = ({ handleSubmitQuizz, seconds, quizEnd }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  // Timer logic
  useEffect(() => {
    if (quizEnd) return;

    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      console.log('test');

      return () => clearInterval(timer);
    } else {
      handleSubmitQuizz();
    }
  }, [timeLeft]);
  return (
    <p className="font-bold text-center text-yellow-700 text-xl">
      Time Left : {formatTime(timeLeft)}
    </p>
  );
};
