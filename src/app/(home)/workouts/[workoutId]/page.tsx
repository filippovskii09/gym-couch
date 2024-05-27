import { FC } from "react";
import WorkoutDetail from "../../../../../components/WorkoutDetail/WorkoutDetail";
interface WorkoutDetailPageParams {
  workoutId: string;
}

interface Props {
  params: WorkoutDetailPageParams;
}

const WorkoutDetailPage: FC<Props> = ({ params }) => {
  return <WorkoutDetail params={params} />;
};

export default WorkoutDetailPage;
