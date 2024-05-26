"use client";

import { baseURL } from "@/app/(home)/layout";
import { useCallback, useState } from "react";
import { Exercise } from "../context/workoutContext";

interface NewWorkout {
  createdAt: string;
  name: string;
  exercises: Exercise[];
}

const usePostWorkouts = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const sendNewWorkout = useCallback(async (newWorkout: NewWorkout) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseURL}/days`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newWorkout),
      });

      const data = await response.json();
      setIsLoading(false);
      console.log("Workout posted succesfully:", data);
    } catch (err) {
      console.error("Error posting workout:", err);
    }
  }, []);

  return { sendNewWorkout, isLoading };
};

export default usePostWorkouts;
