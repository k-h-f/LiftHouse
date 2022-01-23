import React, { useEffect, useState } from 'react';
import { execute } from '../../backend/db-service';

const useDatabase = (query: string, args?: string[]) => {
  const [data, setData] = useState<string>();

  const resultSet = execute(query, args);
  resultSet.then(result => setData(JSON.stringify(result[0])));

  return { data: data && JSON.parse(data) };
};

export default useDatabase;
