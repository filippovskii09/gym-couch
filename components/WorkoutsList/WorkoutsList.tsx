"use client";
import Link from "next/link";
import useGetWorkouts from "../../common/hooks/useGetWorkouts.hook";
import styles from "./WorkoutsList.module.scss";
import WorkoutsItem from "../WorkoutsItem/WorkoutsItem";
import ProgressAnimation from "../ProgressAnimation/ProgressAnimation";

const WorkoutsList = () => {
  const { workoutsData, isLoading } = useGetWorkouts();

  return (
    <div className={`container ${styles.list}`}>
      {isLoading ? (
        <div className={styles.loading}>
          <ProgressAnimation />
        </div>
      ) : (
        workoutsData.map((workout) => (
          <Link href={`/workouts/${workout.id}`} key={workout.id}>
            <WorkoutsItem name={workout.name} />
          </Link>
        ))
      )}
    </div>
  );
};

export default WorkoutsList;
