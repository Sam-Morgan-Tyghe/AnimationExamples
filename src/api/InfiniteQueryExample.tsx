import { useInfiniteQuery } from '@tanstack/react-query'
import { Key } from 'react'
import { get } from '~/api'
import { SERVER } from '~/settings'

export function InfiniteQuery({ endpoint }: { endpoint: string }) {
  const fetchProjects = async ({ pageParam = 0 }) => {
    return await get(`${endpoint}?cursor=` + pageParam).then(res => res.data)
  }

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: [`${SERVER}${endpoint}`],
    queryFn: fetchProjects,
    getNextPageParam: (lastPage, _pages) => lastPage?.nextCursor,
  })
  const errorMessage = ''
  return status === 'loading' ? (
    <p>Loading...</p>
  ) : status === 'error' ? (
    <p>Error: {errorMessage}</p>
  ) : (
    <>
      {data?.pages &&
        data?.pages?.map((group, _i) => (
          <>
            {group?.projects?.map(
              (project: { id: Key | null | undefined; name: string }) => (
                <p key={project.id}>{project.name}</p>
              ),
            )}
          </>
        ))}
      <div>
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? 'Loading more...'
            : hasNextPage
            ? 'Load More'
            : 'Nothing more to load'}
        </button>
      </div>
      <div>{isFetching && !isFetchingNextPage ? 'Fetching...' : null}</div>
    </>
  )
}
