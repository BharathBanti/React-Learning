import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function fetchFruits({ pageParam }) {
  return axios.get(`http://localhost:3001/fruits?_limit=10&_page=${pageParam}`);
}

function InfiniteScroll() {
  const { data, isLoading, isError, error, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['fruits'],
      queryFn: fetchFruits,
      initialPageParam: 1,
      getNextPageParam: (_lastPage, allPages) => {
        // 20 items
        // 5 pages
        if (allPages.length < 5) {
          return allPages.length + 1;
        } else {
          return undefined;
        }
      },
    });

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (isLoading) {
    return <div>Page is loading....</div>;
  }

  if (isError) {
    return <div>Error has occurred...., {error.message}</div>;
  }

  return (
    <div className="fruit-item">
      {data?.pages?.map((page) => {
        return page?.data.map((fruit) => {
          return (
            <div className="fruit-item" key={fruit.id}>
              {fruit.name}
            </div>
          );
        });
      })}
      <div ref={ref}>{isFetchingNextPage && 'Loading...'}</div>
    </div>
  );
}

export default InfiniteScroll;
