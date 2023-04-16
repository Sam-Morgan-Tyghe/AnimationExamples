import { RetrieveVideosOfALLTypesForDiscovery } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import VideoCarosel from '../VideoCarosel'
import VideoCaroselLoading from '../VideoCaroselLoading'

export default function AllDiscovery({
  endpoint,
}: {
  endpoint: string
}): JSX.Element {
  const { data: allData, isLoading } =
    useGetAPI<RetrieveVideosOfALLTypesForDiscovery>({
      endpoint: endpoint,
    })
  return (
    <>
      {isLoading ? (
        <VideoCaroselLoading />
      ) : (
        <VideoCarosel
          videos={allData?.most_popular ?? []}
          count={allData?.most_popular.length ?? 0}
          title="Popular"
          gapSize={32}
        />
      )}
      {isLoading ? (
        <VideoCaroselLoading />
      ) : (
        <VideoCarosel
          videos={allData?.newest ?? []}
          count={allData?.newest.length ?? 0}
          title="Newest"
          gapSize={32}
        />
      )}
      {isLoading ? (
        <VideoCaroselLoading />
      ) : (
        <VideoCarosel
          videos={allData?.similar ?? []}
          count={allData?.similar.length ?? 0}
          title="Similar"
          gapSize={32}
        />
      )}
    </>
  )
}
