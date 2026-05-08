import { useEffect, useState } from 'react';

export function useFetch(fetcher, deps = []) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setIsLoading(true);
    setError(null);
    fetcher()
      .then((result) => mounted && setData(result))
      .catch((err) => mounted && setError(err.message || 'Failed to fetch data'))
      .finally(() => mounted && setIsLoading(false));
    return () => {
      mounted = false;
    };
  }, deps);

  return { data, isLoading, error };
}
