import { Button, SimpleGrid } from '@chakra-ui/react'
import LoadingText from '~/components/LoadingText/LoadingText'
import WorkoutCardThumbnail from '~/components/WorkoutCard/WorkoutCardThumbnail'
import { AnimateAllChildren } from '~/utils/animateChildren'

type InfiniteScrollType = {
  content?: any
  fetchNextPage?: () => void
  hasNextPage?: boolean
  isFetchingNextPage?: boolean
}

export function InfiniteScroll({
  content,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: InfiniteScrollType) {
  return (
    <>
      <SimpleGrid columns={3} spacing="32px">
        <AnimateAllChildren transitionVelocity={5} withProps={false}>
          {content?.map((content: any) => (
            <WorkoutCardThumbnail
              key={content?.id}
              h="320px"
              w="320px"
              {...content}
            />
          ))}
        </AnimateAllChildren>
      </SimpleGrid>
      <Button
        onClick={() => fetchNextPage && fetchNextPage()}
        disabled={!hasNextPage || isFetchingNextPage}
      >
        {isFetchingNextPage ? (
          <LoadingText text={'Loading More'} />
        ) : hasNextPage ? (
          'Load More'
        ) : (
          'Nothing more to load'
        )}
      </Button>
    </>
  )
}
