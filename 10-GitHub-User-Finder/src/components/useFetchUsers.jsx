import { useEffect, useState, useRef } from 'react';

function useFetchUsers(searchTerm) {
  // States
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const timerRef = useRef(null);
  const controllerRef = useRef(null);
  
  // Logic
  useEffect(() => {
    if (!searchTerm) {
      setData(null);
      return;
    }
    
    // clear previous timer
    clearTimeout(timerRef.current);
    
    timerRef.current = setTimeout(() => {
      const controller = new AbortController();
      controllerRef.current = controller;

      async function fetchUsers() {
        try {
          setLoading(true);
          setError(null);

          const response = await fetch(
            `https://api.github.com/search/users?q=${searchTerm}`,
            { signal: controller.signal }
          );

          const data = await response.json();
          setData(data);
        } catch (error) {
          if (error.name === 'AbortError') {
            // ignore abort
          } else {
            setError(error);
          }
        } finally {
          setLoading(false);
        }
      }

      fetchUsers();
    }, 500);

    // CleanUp function
    return () => {
      controllerRef.current?.abort();
      clearTimeout(timerRef.current);
    };
  }, [searchTerm]);

  return { data, loading, error };
}

export default useFetchUsers;
