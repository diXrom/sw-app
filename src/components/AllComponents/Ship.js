import React, { useState, useEffect } from 'react';
import { StarshipDetails } from '../AllComponents';
import ErrorBoundry from '../ErrorBoundry';
import { useParams } from 'react-router-dom';

export function Ship({ getData }) {
  const [data, setData] = useState(null);
  const params = useParams();
  useEffect(() => {
    getData(params.id).then((res) => setData(res));
  }, [params, getData]);
  return (
    <ErrorBoundry>
      <StarshipDetails item={data} />
    </ErrorBoundry >
  );
}
