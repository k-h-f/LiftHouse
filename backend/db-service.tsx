import {
  enablePromise,
  openDatabase,
  ResultSet,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import exercisesJson from './exercises.json';
import LiftHouseDatabaseHandler from './LiftHouseDatabaseHandler';

enablePromise(true);

export const getDBConnection = () => {
  return openDatabase({ name: 'lifthouse-data.db', location: 'default' });
};

const buildValuesFromJson = (exerciseType: string[]) => {
  let values = '';
  exerciseType.map(exercise => {
    values = values.concat(`("${exercise}"),`);
  });
  return values.substring(0, values.length - 1);
};

const populateExercises = (db: SQLiteDatabase) => {
  const insertPullExercises =
    'INSERT INTO exercises (exerciseName) VALUES ' +
    buildValuesFromJson(exercisesJson.exercises.pull as string[]);

  const insertPushExercises =
    'INSERT INTO exercises (exerciseName) VALUES ' +
    buildValuesFromJson(exercisesJson.exercises.push as string[]);

  const insertLegExercises =
    'INSERT INTO exercises (exerciseName) VALUES ' +
    buildValuesFromJson(exercisesJson.exercises.legs as string[]);

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
    'CREATE TABLE IF NOT EXISTS exercises (exerciseId INTEGER PRIMARY KEY, exerciseName TEXT NOT NULL);';
  const routines =
    'CREATE TABLE IF NOT EXISTS routines (routineId INTEGER PRIMARY KEY, routineName TEXT NOT NULL);';
  const routineToExercises =
    'CREATE TABLE IF NOT EXISTS routineToExercises (routineId INTEGER REFERENCES routines(routineId), exerciseId INTEGER REFERENCES exercises(exerciseId));';
  const entries =
    'CREATE TABLE IF NOT EXISTS entries (entryId INTEGER PRIMARY KEY, exerciseId INTEGER REFERENCES exercises(exerciseId), date TEXT NOT NULL, setnum INTEGER, reps INTEGER, weight INTEGER);';

  db.executeSql(exercises);
  db.executeSql(routines);
  db.executeSql(routineToExercises);
  db.executeSql(entries);
};

export const execute = (queryAlias: string): Promise<[ResultSet]> => {
  const result = handler.handle(queryAlias);
  return result;
};

const db = getDBConnection();
const handler = new LiftHouseDatabaseHandler(db);

db.then(connection => {
  createTables(connection);
  populateExercises(connection);
});
