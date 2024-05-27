import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Exercise, Set } from "../context/workoutContext";

interface changeSetPropsType {
  setWorkoutData: Dispatch<SetStateAction<Exercise[]>>;
}

const changeSet = ({ setWorkoutData }: changeSetPropsType) => {
  const handleSetChange = (
    exerciseIndex: number,
    setIndex: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const { name, value } = event.target;
    setWorkoutData((prevData) => {
      const newData = [...prevData];
      newData[exerciseIndex].sets[setIndex][name as keyof Set] = value;
      return newData;
    });
  };

  return handleSetChange;
};

export default changeSet;
