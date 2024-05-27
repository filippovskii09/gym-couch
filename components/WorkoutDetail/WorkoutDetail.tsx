"use client";

import React, { FC, useEffect } from "react";
import useGetCurrentWorkout from "../../common/hooks/useGetCurrentWorkout.hook";
import styles from "./WorkoutDetail.module.scss";
import ProgressAnimation from "../ProgressAnimation/ProgressAnimation";

interface Params {
  workoutId: string;
}

interface Props {
  params: Params;
}

const WorkoutDetail: FC<Props> = ({ params }) => {
  const { getCurrentWorkout, isLoading, currentWorkout } =
    useGetCurrentWorkout();

  useEffect(() => {
    getCurrentWorkout(params.workoutId);
  }, []);

  return (
    <div className={`container ${styles.wrapper}`}>
      {isLoading ? (
        <div className={styles.loading}>
          <ProgressAnimation />
        </div>
      ) : (
        <div className={styles.content}>
          <div className={styles.item}>
            {currentWorkout?.exercises?.map((exercise, index) => (
              <div className={styles.exercize} key={index}>
                <h3 className={styles.name}>{exercise.name}</h3>
                <ul className={styles.list}>
                  {exercise?.sets?.map((set, index) => (
                    <li key={index}>
                      {set.weight}x{set.reps}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkoutDetail;
