"use client";

import { baseURL } from "@/app/(home)/layout";
import { useCallback, useState } from "react";
import { Exercise } from "../context/workoutContext";

type CurrentWorkoutType = {
  name: string;
  exercises: Exercise[];
};
const useGetCurrentWorkout = () => {
  const [currentWorkout, setCurrentWorkout] =
    useState<CurrentWorkoutType | null>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCurrentWorkout = useCallback(async (workoutId: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseURL}/days/${workoutId}`);
      const data = await response.json();
      setCurrentWorkout(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }, []);

  return { getCurrentWorkout, currentWorkout, isLoading };
};

export default useGetCurrentWorkout;
