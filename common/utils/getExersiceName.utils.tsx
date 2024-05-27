"use client";

import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { Exercise } from "../context/workoutContext";

interface getExersiceNamePropsType {
  setWorkoutData: Dispatch<SetStateAction<Exercise[]>>;
}

const getExersiceName = ({ setWorkoutData }: getExersiceNamePropsType) => {
  const handleExerciseNameChange = (
    exerciseIndex: number,
    e: ChangeEvent<HTMLInputElement>,
  ) => {
    const { value } = e.target;
    setWorkoutData((prevData) => {
      const newData = [...prevData];
      newData[exerciseIndex].name = value;
      return newData;
    });
  };

  return handleExerciseNameChange;
};

export default getExersiceName;
