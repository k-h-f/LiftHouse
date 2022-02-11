import { useEffect, useState } from 'react';
import { execute } from '../../../backend/db-service';
import QueryAlias from '../../../backend/queryAlias';

/**
 *
 * @param query You can think of this has a function to call a specific query
 *              e.g. GET_ROUTINES is a alias to fetch all of the routines
 *              for the user
 */
const useDatabase = (query: QueryAlias) => {
  //Have to use the any type here since there are many different responses
  const [data, setData] = useState<any>();
  const [isCompleted, setCompleted] = useState<boolean>(false);

  useEffect(() => {
    setCompleted(false);

    const resultSet = execute(query);

    resultSet.then(result => {
      setData(result);
      setCompleted(true);
    });
  }, [query]);

  return { data, isCompleted };
};

export default useDatabase;
