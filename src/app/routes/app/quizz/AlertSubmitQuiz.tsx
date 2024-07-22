import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import Button from '@/components/ui/button/button';

type AlertSubmitQuizProps = {
  quizEnd: boolean;
  handleSubmitQuizz: () => void;
  score: number;
  setQuizEnd: (state: boolean) => void;
};

export const AlertSubmitQuiz = ({
  quizEnd,
  handleSubmitQuizz,
  score,
  setQuizEnd,
}: AlertSubmitQuizProps) => {
  return (
    <AlertDialog>
      {!quizEnd && (
        <AlertDialogTrigger>
          <Button disabled={quizEnd} onClick={handleSubmitQuizz}>
            Submit
          </Button>
        </AlertDialogTrigger>
      )}

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure ?</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to Submit your try ?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => setQuizEnd(true)}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
