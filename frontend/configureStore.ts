import { createStore, combineReducers } from 'redux';

import { selectExercuseReducer } from './utils/reducers/selectExerciseReducer';

const rootReducer = combineReducers({
  selectedExercises: selectExercuseReducer,
});

const configureStore = () => createStore(rootReducer);

export default configureStore;
export type RootState = ReturnType<typeof rootReducer>;
