import { useDispatch, useSelector } from 'react-redux';
import { Exercise } from '../../../../backend/dtos/Exercise';
import { RootState } from '../../../configureStore';
import {
  addExercise,
  removeExercise,
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
    onRemoveExercise: (exercise: Exercise) =>
      dispatch(removeExercise(exercise)),
    resetSelectedExercises: () => dispatch(resetExercises()),
  };
};

export default useSelectedExercises;
