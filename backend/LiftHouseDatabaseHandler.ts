import { SQLiteDatabase } from 'react-native-sqlite-storage';
import QueryAlias from './queryAlias';
import { Exercise } from './dtos/Exercise';
import { Routine } from './dtos/Routine';
import { InsertIntoRoutines, QueryArgs, TableName } from './types';

class LiftHouseDatabaseHandler {
  private db: Promise<SQLiteDatabase>;

  constructor(db: Promise<SQLiteDatabase>) {
    this.db = db;
  }

  insertIntoRoutines(queryArgs: QueryArgs): Promise<boolean> {
    const { args }: { args: InsertIntoRoutines } = queryArgs;
    //TODO
    const insertIntoRoutinesQuery = `INSERT INTO ${TableName.routines} (routineName) VALUES ('${args.routineName}')`;

    return new Promise((resolve, reject) =>
      this.db.then(connection => {
        connection.transaction(tx => {
          tx.executeSql(insertIntoRoutinesQuery, [], (asd, resultSet) => {
            const insertIntoRoutineToExercises = `INSERT INTO ${
              TableName.routineToExercises
            } (routineId, exerciseId, sortingOrder) VALUES ${args.exercisesIdsWithOrder.map(
              exercise =>
                `(${resultSet.insertId}, ${exercise.id}, ${exercise.order})`,
            )}`;

            tx.executeSql(
              insertIntoRoutineToExercises,
              [],
              (asd1, resultSet2) => {
                console.log(asd1, resultSet2);
              },
            );
          });
        });
      }),
    );
  }

  getExercises(): Promise<Exercise[]> {
    const getRoutinesQuery = 'SELECT * FROM exercises;';

    return new Promise((resolve, reject) =>
      this.db.then(connection => {
        connection.transaction(tx => {
          tx.executeSql(
            getRoutinesQuery,
            [],
            (asd, resultSet) => {
              let data: Exercise[] = [];
              for (let i = 0; i < resultSet.rows.length; i++) {
                data = [
                  ...data,
                  {
                    id: resultSet.rows.item(i).exerciseId,
                    type: resultSet.rows.item(i).type,
                    exerciseName: resultSet.rows.item(i).exerciseName,
                  } as Exercise,
                ];
              }

              resolve(data);
            },
            (tsx, error) => reject(error),
          );
        });
      }),
    );
  }

  getRoutines(): Promise<Routine[]> {
    const getRoutinesQuery = 'SELECT * FROM routines LIMIT 20;';

    return new Promise((resolve, reject) =>
      this.db.then(connection => {
        connection.transaction(tx => {
          tx.executeSql(
            getRoutinesQuery,
            [],
            (asd, resultSet) => {
              let data: Routine[] = [];
              for (let i = 0; i < resultSet.rows.length; i++) {
                data = [
                  ...data,
                  {
                    id: resultSet.rows.item(i).routineId,
                    routineName: resultSet.rows.item(i).routineName,
                  } as Routine,
                ];
              }

              resolve(data);
            },
            (tsx, error) => reject(error),
          );
        });
      }),
    );
  }

  handle(queryAlias: QueryAlias, queryArgs: QueryArgs | undefined) {
    switch (queryAlias) {
      case QueryAlias.GET_ROUTINES:
        return this.getRoutines();
      case QueryAlias.GET_EXERCISES:
        return this.getExercises();
      case QueryAlias.INSERT_ROUTINE:
        return queryArgs && this.insertIntoRoutines(queryArgs);
      default:
        throw Error('Query alias not found');
    }
  }
}

export default LiftHouseDatabaseHandler;
