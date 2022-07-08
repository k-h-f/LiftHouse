import { useState } from 'react';
import { Query } from '../../../backend/LiftHouseDatabase';
import { execute } from '../../../backend/db-service';

/**
 *
 * @param query This is an alias to execute a specific query
 *              e.g. GET_EXERCISES_BY_TYPE is a alias to fetch all of the exercises by type
 *
 */
const useDatabase = () => {
  const [data, setData] = useState<any>();
  const [isCompleted, setCompleted] = useState<boolean>(false);

  const executeQuery = (query: Query) => {
    const resultSet = execute(query);

    resultSet.then(result => {
      setData(result);
      setCompleted(true);
    });
  };

  return { data, isCompleted, executeQuery };
};

export default useDatabase;
