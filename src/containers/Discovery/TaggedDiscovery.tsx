import { FilterALLVideosByTags } from '~/api/types'
import { useGetInfiniteAPI } from '~/api/useHook'

import { InfiniteScroll } from '../InfiniteScroll'

export default function TaggedDiscovery({
  endpoint,
}: {
  endpoint: string
}): JSX.Element {
  const {
    data: content,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGetInfiniteAPI<FilterALLVideosByTags>({
    endpoint: endpoint,
    data: { hasParams: true },
  })
  return (
    <InfiniteScroll
      isFetchingNextPage={isFetchingNextPage}
      hasNextPage={hasNextPage}
      fetchNextPage={fetchNextPage}
      content={
        content?.pages?.flatMap(page => page?.results).filter(Boolean) ?? []
      }
    />
  )
}
