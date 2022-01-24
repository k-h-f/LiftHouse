import { SQLiteDatabase } from 'react-native-sqlite-storage';
import QueryAlias from './queryAlias';
import { Routine } from './responseTypes.ts/getRoutines';

class LiftHouseDatabaseHandler {
  private db: Promise<SQLiteDatabase>;

  constructor(db: Promise<SQLiteDatabase>) {
    this.db = db;
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

  handle(queryAlias: QueryAlias) {
    switch (queryAlias) {
      case QueryAlias.GET_ROUTINES:
        return this.getRoutines();
      default:
        throw Error('Query alias not found');
    }
  }
}

export default LiftHouseDatabaseHandler;
