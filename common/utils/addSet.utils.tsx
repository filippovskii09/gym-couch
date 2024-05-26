import { Dispatch, SetStateAction } from "react";
import { Exercise } from "../context/workoutContext";

type addSetPropsType = {
  setWorkoutData: Dispatch<SetStateAction<Exercise[]>>;
};

const addSet = ({ setWorkoutData }: addSetPropsType) => {
  const handleAddSet = (exerciseIndex: number) => {
    setWorkoutData((prevData) => {
      const newData = [...prevData];
      const exerciseToUpdate = newData[exerciseIndex];
      const updatedExercise = {
        ...exerciseToUpdate,
        sets: [...exerciseToUpdate.sets, { weight: "", reps: "" }],
      };
      newData[exerciseIndex] = updatedExercise;
      return newData;
    });
  };

  return handleAddSet;
};

export default addSet;
