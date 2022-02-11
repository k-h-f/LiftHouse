import { useDispatch, useSelector } from 'react-redux';
import { Exercise } from '../../../../backend/responseTypes.ts/getExercises';
import { RootState } from '../../../configureStore';
import {
  addExercise,
  resetExercises,
} from '../../../utils/actions/selectExerciseActions';

const useSelectedExercises = () => {
  const selectedExercises = useSelector(
    (state: RootState) => state.selectedExercises,
  );
  const dispatch = useDispatch();

  return {
    selectedExercises: selectedExercises.exercises,
    onSelectExercise: (exercise: Exercise) => dispatch(addExercise(exercise)),
    resetSelectedExercises: () => dispatch(resetExercises()),
  };
};

export default useSelectedExercises;
