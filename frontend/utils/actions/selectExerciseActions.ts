import { Exercise } from '../../../backend/dtos/Exercise';

export const ADD_SELECTED_EXERCISE = 'ADD_SELECTED_EXERCISE';
export const REMOVE_EXERCISE = 'REMOVE_EXERCISE';
export const RESET_SELECTED_EXERCISES = 'RESET_SELECTED_EXERCISES';

export const addExercise = (exercise: Exercise) => {
  return {
    type: ADD_SELECTED_EXERCISE,
    payload: exercise,
  };
};

export const removeExercise = (exercise: Exercise) => {
  return {
    type: REMOVE_EXERCISE,
    payload: exercise,
  };
};

export const resetExercises = () => {
  return {
    type: RESET_SELECTED_EXERCISES,
    payload: [],
  };
};
