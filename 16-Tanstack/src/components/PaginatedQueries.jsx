import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';

function fetchFruits(pageId) {
  return axios.get(`http://localhost:3001/fruits?_limit=4&_page=${pageId}`);
}

function PaginatedQueries() {
  const [page, setPage] = useState(1);

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['fruits', page],
    queryFn: () => fetchFruits(page),
    keepPreviousData: true,
  });

  if (isLoading) {
    return <div>Page is loading....</div>;
  }

  if (isError) {
    return <div>Error has occurred...., {error.message}</div>;
  }

  return (
    <div className="container">
      {data?.data.map((item) => (
        <div key={item.id} className="fruit-label">
          {item.name}
        </div>
      ))}

      <button
        onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
        disabled={page === 1}
      >
        Prev
      </button>
      <span>{page}</span>
      <button
        onClick={() => setPage((prev) => prev + 1)}
        disabled={page == 5}
      >
        Next
      </button>
    </div>
  );
}

export default PaginatedQueries;
