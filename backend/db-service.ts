import {
  SQLiteDatabase,
  enablePromise,
  openDatabase,
} from 'react-native-sqlite-storage';
import { Query } from './LiftHouseDatabase';
import LiftHouseDatabase from './LiftHouseDatabase';
import exercisesJson from './exercises.json';
import { ExerciseType, TableName } from './types';

//Allows us to create promises when fetching from SQLite database
enablePromise(true);

export const getDBConnection = () =>
  openDatabase({ name: 'lifthouse-data.db', location: 'default' });
/**
 * Utility function that retrieves the values from the exercises.json
 * The value would be the exercise name
 * @param exerciseType
 * @param exercises An array from the JSON object
 * @returns
 */
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

/**
 * The exercises table will be populated with pre-defined exercises served from the
 * exercises.json file
 * @param db Instance of the DB
 */
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
 * Deletes all the tables in the local database
 * @param db Instance of the DB
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const clearAllTables = (db: SQLiteDatabase) => {
  Object.values(TableName).map(tableName =>
    db.executeSql(`DROP TABLE IF EXISTS ${tableName};`),
  );
};

/**
 * Creates tables if doesn't exist
 * @table routineToExercise This table is used to match routines with exercises
 *        this is to match each routine with the exercises that users have selected
 *        since SQLite doesn't support arrays, this intermediate table is needed
 * @table routines This table stores the users routines
 * @table exercises This table stores the exercises that the application support.
 *        The user does not input the exercises, this table is populated when the application
 *        starts in the populateExercises function
 */
const createTables = async (db: SQLiteDatabase) => {
  const dropExercises = 'DROP TABLE IF EXISTS exercises;';
  clearAllTables(db);

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
export const execute = (query: Query): Promise<any> => {
  const result = lifthouseDB.queryRunner(query);
  return result;
};

const db = getDBConnection();
const lifthouseDB = new LiftHouseDatabase(db);

db.then(connection => {
  createTables(connection);
  populateExercises(connection);
});
