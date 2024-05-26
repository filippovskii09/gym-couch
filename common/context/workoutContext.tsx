"use client";

import {
  ChangeEvent,
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import getExersiceName from "../utils/getExersiceName.utils";
import changeSet from "../utils/changeSet.utils";
import addExercize from "../utils/addExercize.utils";
import addSet from "../utils/addSet.utils";
import workoutSubmit from "../utils/workoutSubmit.utils";

export interface Set {
  weight: string;
  reps: string;
}

export interface Exercise {
  name: string;
  sets: Set[];
}
export const baseURL = "https://66068289be53febb857e0d81.mockapi.io";
type WorkoutContextType = {
  workoutData: Exercise[];
  setWorkoutData: Dispatch<SetStateAction<Exercise[]>>;
  workoutName: string;
  setWorkoutName: Dispatch<SetStateAction<string>>;
  handleExerciseNameChange: (index: number, e: any) => void;
  handleSetChange: (
    exerciseIndex: number,
    setIndex: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  handleAddExercise: () => void;
  handleAddSet: (exerciseIndex: number) => void;
  handleSubmit: () => void;
};

export const WorkoutContext = createContext<WorkoutContextType>({
  workoutData: [],
  setWorkoutData: () => {},
  workoutName: "",
  setWorkoutName: () => {},
  handleExerciseNameChange: () => {},
  handleSetChange: () => {},
  handleAddExercise: () => {},
  handleAddSet: () => {},
  handleSubmit: () => {},
});

type WorkoutContextProviderProps = {
  children: ReactNode;
};

const WorkoutContextProvider = ({ children }: WorkoutContextProviderProps) => {
  const [workoutData, setWorkoutData] = useState<Exercise[]>([]);
  const [workoutName, setWorkoutName] = useState<string>("");

  const handleExerciseNameChange = getExersiceName({ setWorkoutData });
  const handleSetChange = changeSet({ setWorkoutData });
  const handleAddExercise = addExercize({ setWorkoutData });
  const handleAddSet = addSet({ setWorkoutData });
  const handleSubmit = workoutSubmit({ workoutName, workoutData });

  return (
    <WorkoutContext.Provider
      value={{
        workoutData,
        workoutName,
        setWorkoutName,
        setWorkoutData,
        handleExerciseNameChange,
        handleSetChange,
        handleAddExercise,
        handleAddSet,
        handleSubmit,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export default WorkoutContextProvider;
