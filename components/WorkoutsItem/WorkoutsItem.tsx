import { FC } from "react";
import styles from "./WorkoutsItem.module.scss";

interface Props {
  name: string;
}

const WorkoutsItem: FC<Props> = ({ name }) => {
  return (
    <div className={styles.workout}>
      <h2>{name}</h2>
    </div>
  );
};

export default WorkoutsItem;
