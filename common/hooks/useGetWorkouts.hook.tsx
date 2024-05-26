"use client";

import { useEffect, useState } from "react";
import { Exercise } from "../context/workoutContext";
import { baseURL } from "@/app/(home)/page";

interface Workout {
  createdAt: string;
  name: string;
  exercises: Exercise[];
  id: string;
}

interface useGetWorkoutsResult {
  workoutsData: Workout[];
  isLoading: boolean;
  // error: Error | null
}

const useGetWorkouts = (): useGetWorkoutsResult => {
  const [workoutsData, setWorkoutsData] = useState<Workout[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const getAllWorkouts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${baseURL}/days`);
        const data = await response.json();
        setWorkoutsData(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    getAllWorkouts();
  }, []);

  return { workoutsData, isLoading };
};

export default useGetWorkouts;
