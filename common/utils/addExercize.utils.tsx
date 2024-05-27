import { Dispatch, SetStateAction } from "react";
import { Exercise } from "../context/workoutContext";

interface addExercizePropsType {
  setWorkoutData: Dispatch<SetStateAction<Exercise[]>>;
}

const addExercize = ({ setWorkoutData }: addExercizePropsType) => {
  const handleAddExercise = () => {
    setWorkoutData((prevData) => [
      ...prevData,
      { name: "", sets: [{ weight: "", reps: "" }] },
    ]);
  };

  return handleAddExercise;
};

export default addExercize;
