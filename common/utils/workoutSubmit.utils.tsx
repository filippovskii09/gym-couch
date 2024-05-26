import { Exercise } from "../context/workoutContext";
import usePostWorkouts from "../hooks/usePostWorkouts.hook";
import { useRouter } from "next/navigation";

type workoutSubmitPropsType = {
  workoutName: string;
  workoutData: Exercise[];
};

const workoutSubmit = ({
  workoutName,
  workoutData,
}: workoutSubmitPropsType) => {
  const { sendNewWorkout } = usePostWorkouts();
  const router = useRouter();

  const handleSubmit = async () => {
    const newWorkout = {
      createdAt: new Date().toISOString(),
      name: workoutName,
      exercises: workoutData,
    };
    await sendNewWorkout(newWorkout);
    router.push("/");
  };

  return handleSubmit;
};

export default workoutSubmit;
