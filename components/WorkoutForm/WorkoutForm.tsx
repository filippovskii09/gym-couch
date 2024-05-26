"use client";

import { FC, useContext } from "react";
import styles from "./WorkoutForm.module.scss";
import { WorkoutContext } from "../../common/context/workoutContext";

const WorkoutForm: FC = () => {
  const {
    handleExerciseNameChange,
    handleAddExercise,
    handleAddSet,
    handleSetChange,
    workoutData,
    handleSubmit,
    workoutName,
    setWorkoutName,
  } = useContext(WorkoutContext);

  return (
    <div className={`container ${styles.wrapper}`}>
      <div className={styles.input}>
        <label htmlFor="workoutName">Назва тренування</label>
        <input
          type="text"
          id="workoutName"
          name="workoutName"
          value={workoutName}
          onChange={(e) => setWorkoutName(e.target.value)}
          placeholder="Назва тренування"
        />
      </div>
      {workoutData.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} className={styles.exercise}>
          <div className={styles.input}>
            <label htmlFor="exerciseName">Назва вправи</label>
            <input
              type="text"
              name="name"
              id="exerciseName"
              value={exercise.name}
              placeholder="Назва вправи"
              onChange={(e) => handleExerciseNameChange(exerciseIndex, e)}
            />
          </div>
          {exercise.sets.map((set, setIndex) => (
            <div key={setIndex} className={styles.form}>
              <div className={styles.input}>
                <label htmlFor="weight">Вага</label>
                <input
                  type="text"
                  name="weight"
                  id="weight"
                  placeholder="Вага"
                  value={set.weight}
                  onChange={(e) => handleSetChange(exerciseIndex, setIndex, e)}
                />
              </div>
              <div className={styles.input}>
                <label htmlFor="reps">Кількість повторень</label>
                <input
                  type="text"
                  name="reps"
                  placeholder="Кількість повторень"
                  id="reps"
                  value={set.reps}
                  onChange={(e) => handleSetChange(exerciseIndex, setIndex, e)}
                />
              </div>
            </div>
          ))}
          <button onClick={() => handleAddSet(exerciseIndex)}>
            Додати підход
          </button>
        </div>
      ))}
      <div className={styles.actions}>
        <button onClick={handleAddExercise}>Додати вправу</button>
        <button onClick={handleSubmit}>Зберегти тренування</button>
      </div>
    </div>
  );
};

export default WorkoutForm;
