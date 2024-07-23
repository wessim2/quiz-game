import { formatTime } from '@/utils/helpers';
import { useEffect, useState } from 'react';

type TimerProps = {
  handleSubmitQuizz: () => void;
};

export const Timer = ({ handleSubmitQuizz }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(5);
  // Timer logic
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      handleSubmitQuizz();
    }
  }, [timeLeft]);
  return <p>Time Left : {formatTime(timeLeft)}</p>;
};
