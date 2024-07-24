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
};

export const AlertSubmitQuiz = ({
  quizEnd,
  handleSubmitQuizz,
}: AlertSubmitQuizProps) => {
  return (
    <AlertDialog>
      {!quizEnd && (
        <AlertDialogTrigger>
          <Button disabled={quizEnd}>Submit</Button>
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
          <AlertDialogAction onClick={handleSubmitQuizz}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
