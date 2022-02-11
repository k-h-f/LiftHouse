import { Exercise } from '../../../backend/responseTypes.ts/getExercises';
import {
  ADD_SELECTED_EXERCISE,
  RESET_SELECTED_EXERCISES,
} from '../actions/selectExerciseActions';

const initialState = {
  exercises: [] as Exercise[],
};

export const selectExercuseReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_SELECTED_EXERCISE:
      return {
        ...state,
        exercises: [...state.exercises, action.payload],
      };
    case RESET_SELECTED_EXERCISES:
      return {
        ...state,
        exercises: [],
      };
    default:
      return state;
  }
};
