import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import { QueryArgs } from '../frontend/utils/hooks/useDatabase';
import exercisesJson from './exercises.json';
import LiftHouseDatabaseHandler from './LiftHouseDatabaseHandler';
import QueryAlias from './queryAlias';
import ExerciseType from './types';

enablePromise(true);

export const getDBConnection = () => {
  return openDatabase({ name: 'lifthouse-data.db', location: 'default' });
};

const buildValuesFromJson = (
  exerciseType: ExerciseType,
  exercises: string[],
) => {
  let values = '';
  exercises.map(exercise => {
    values = values.concat(`("${exerciseType}", "${exercise}"),`);
  });

  return values.substring(0, values.length - 1);
};

const populateExercises = (db: SQLiteDatabase) => {
  const insertPullExercises =
    'INSERT INTO exercises (type, exerciseName) VALUES ' +
    buildValuesFromJson(
      ExerciseType.PULL,
      exercisesJson.exercises.pull as string[],
    );

  const insertPushExercises =
    'INSERT INTO exercises (type, exerciseName) VALUES ' +
    buildValuesFromJson(
      ExerciseType.PUSH,
      exercisesJson.exercises.push as string[],
    );

  const insertLegExercises =
    'INSERT INTO exercises (type, exerciseName) VALUES ' +
    buildValuesFromJson(
      ExerciseType.LEGS,
      exercisesJson.exercises.legs as string[],
    );

  db.executeSql(insertPullExercises);
  db.executeSql(insertPushExercises);
  db.executeSql(insertLegExercises);
};

/**
 * Creates tables if doesn't exist
 * @table routineToExercise This table is used to match routines with exercises
 *        this is to match each routine with the exercises that users have selected
 *        since SQLite doesn't support arrays, this intermediate table is needed
 */
const createTables = async (db: SQLiteDatabase) => {
  const dropExercises = 'DROP TABLE IF EXISTS exercises;';

  db.executeSql(dropExercises);

  const exercises =
    'CREATE TABLE IF NOT EXISTS exercises (exerciseId INTEGER PRIMARY KEY, type TEXT NOT NULL, exerciseName TEXT NOT NULL);';
  const routines =
    'CREATE TABLE IF NOT EXISTS routines (routineId INTEGER PRIMARY KEY, routineName TEXT NOT NULL);';
  const routineToExercises =
    'CREATE TABLE IF NOT EXISTS routineToExercises (routineId INTEGER REFERENCES routines(routineId), exerciseId INTEGER REFERENCES exercises(exerciseId), sortingOrder INTEGER);';
  const entries =
    'CREATE TABLE IF NOT EXISTS entries (entryId INTEGER PRIMARY KEY, exerciseId INTEGER REFERENCES exercises(exerciseId), date TEXT NOT NULL, setnum INTEGER, reps INTEGER, weight INTEGER);';

  db.executeSql(exercises);
  db.executeSql(routines);
  db.executeSql(routineToExercises);
  db.executeSql(entries);
};

/**
 *
 * @param queryAlias You can think of this has a function to call a specific query
 * @returns Return a promise with any type since there are many different types of responses
 *          This means you have to cast the response type wherever you call the useDatabase hook
 */
export const execute = (queryAlias: QueryAlias, queryArgs?: QueryArgs): Promise<any> => {
  const result = handler.handle(queryAlias, queryArgs);
  return result;
};

const db = getDBConnection();
const handler = new LiftHouseDatabaseHandler(db);

db.then(connection => {
  createTables(connection);
  populateExercises(connection);
});
