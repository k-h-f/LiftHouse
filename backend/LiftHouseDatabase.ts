import { SQLiteDatabase } from 'react-native-sqlite-storage';

/**
 * The contract which the frontend should use, where each query is specified
 */
export enum Query {}

/**
 * This is the Database class used for ACID operations on the database
 */
class LiftHouseDatabase {
  private db: Promise<SQLiteDatabase>;

  constructor(db: Promise<SQLiteDatabase>) {
    this.db = db;
  }

  async getExercises() {
    return Promise.resolve();
  }

  /**
   *
   * @param query Query that will be executed
   * @returns a result set from the database as a promise
   */
  queryRunner(query: Query) {
    switch (query) {
      default:
        return Promise.reject('Query not supported');
    }
  }
}

export default LiftHouseDatabase;
