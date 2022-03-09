import { useState } from 'react';
import { execute } from '../../../backend/db-service';
import QueryAlias from '../../../backend/queryAlias';
import { QueryArgs } from '../../../backend/types';

/**
 *
 * @param requestedQuery You can think of this has a function to call a specific query
 *              e.g. GET_ROUTINES is a alias to fetch all of the routines
 *              for the user
 */
const useDatabase = () => {
  //Have to use the any type here since there are many different responses
  const [data, setData] = useState<any>();
  const [isCompleted, setCompleted] = useState<boolean>(false);

  const executeQuery = (requestedQuery: QueryAlias, args?: QueryArgs) => {
    const resultSet = execute(requestedQuery, args);

    resultSet.then(result => {
      setData(result);
      setCompleted(true);
    });
  };

  return { data, isCompleted, executeQuery };
};

export default useDatabase;
