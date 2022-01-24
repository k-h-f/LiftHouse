import { SQLiteDatabase } from 'react-native-sqlite-storage';

class LiftHouseDatabaseHandler {
  private db: Promise<SQLiteDatabase>;

  constructor(db: Promise<SQLiteDatabase>) {
    this.db = db;
  }

  getRoutines() {
    const getRoutinesQuery = 'SELECT * FROM routines LIMIT 20;';
    const response = this.db.then(tx => {
      return tx.executeSql(getRoutinesQuery);
    });
    return response;
  }

  handle(queryAlias: string) {
    const queryMapper = {
      ['getRoutines']: this.getRoutines(),
    };

    return queryMapper[queryAlias];
  }
}

export default LiftHouseDatabaseHandler;
