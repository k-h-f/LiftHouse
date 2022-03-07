import { useEffect, useState } from 'react';
import { execute } from '../../../backend/db-service';
import QueryAlias from '../../../backend/queryAlias';
import { QueryArgs } from '../../../backend/types';


/**
 *
 * @param query You can think of this has a function to call a specific query
 *              e.g. GET_ROUTINES is a alias to fetch all of the routines
 *              for the user
 */
const useDatabase = () => {
  //Have to use the any type here since there are many different responses
  const [data, setData] = useState<any>();
  const [isCompleted, setCompleted] = useState<boolean>(false);
  const [query, setQuery] = useState<QueryAlias>();
  const [queryArgs, setQueryArgs] = useState<QueryArgs>();

  const executeQuery = (requestedQuery: QueryAlias, args?: QueryArgs) => {
    setQuery(requestedQuery);
    setQueryArgs(args);
  };

  useEffect(() => {
    setCompleted(false);
    if (query !== undefined) {
      const resultSet = execute(query, queryArgs);

      resultSet.then(result => {
        setData(result);
        setCompleted(true);
      });
    }
  }, [query, queryArgs]);

  return { data, isCompleted, executeQuery };
};

export default useDatabase;
