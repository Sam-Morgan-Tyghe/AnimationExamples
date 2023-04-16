import { ChevronLeftIcon } from '@chakra-ui/icons'
import { VStack } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  GetFavouriteArticlesForUser,
  GetFavouriteChallengesForUser,
  GetFavouriteHowToForUser,
  GetFavouriteProgramsForUser,
  GetFavouriteRecipesForUser,
  GetFavouriteWorkoutsForUser,
} from '~/api/types'
import { useGetInfiniteAPI } from '~/api/useHook'
import ProgramFilter from '~/components/ProgramFilter'
import { ProgramFilterTypes } from '~/utils/consts/filterProgramTypes'
import { goBack } from '~/utils/helper'

import { InfiniteScroll } from './../containers/InfiniteScroll'

export default function Favorites(): JSX.Element {
  const navigate = useNavigate()
  const [activeProgramFilter, setActiveProgramFilter] = useState('workout')

  const {
    data: workout,
    fetchNextPage: fetchNextWorkoutPage,
    hasNextPage: hasNextWorkoutPage,
    isFetchingNextPage: isFetchingNextWorkoutPage,
  } = useGetInfiniteAPI<GetFavouriteWorkoutsForUser>({
    endpoint: '/favourite/workout',
  })
  const {
    data: challenge,
    fetchNextPage: fetchNextChallengePage,
    hasNextPage: hasNextChallengePage,
    isFetchingNextPage: isFetchingNextChallengePage,
  } = useGetInfiniteAPI<GetFavouriteChallengesForUser>({
    endpoint: '/favourite/challenge',
  })

  const {
    data: program,
    fetchNextPage: fetchNextProgramPage,
    hasNextPage: hasNextProgramPage,
    isFetchingNextPage: isFetchingNextProgramPage,
  } = useGetInfiniteAPI<GetFavouriteProgramsForUser>({
    endpoint: '/favourite/program',
  })

  const {
    data: recipe,
    fetchNextPage: fetchNextRecipePage,
    hasNextPage: hasNextRecipePage,
    isFetchingNextPage: isFetchingNextRecipePage,
  } = useGetInfiniteAPI<GetFavouriteRecipesForUser>({
    endpoint: '/favourite/recipe',
  })

  const {
    data: article,
    fetchNextPage: fetchNextArticlePage,
    hasNextPage: hasNextArticlePage,
    isFetchingNextPage: isFetchingNextArticlePage,
  } = useGetInfiniteAPI<GetFavouriteArticlesForUser>({
    endpoint: '/favourite/article',
  })

  const {
    data: howto,
    fetchNextPage: fetchNextHowToPage,
    hasNextPage: hasNextHowToPage,
    isFetchingNextPage: isFetchingNextHowToPage,
  } = useGetInfiniteAPI<GetFavouriteHowToForUser>({
    endpoint: '/favourite/how-to',
  })

  const flattenedData = (key: string) => {
    return {
      workout: {
        content: workout?.pages?.flatMap(page => page?.results) ?? [],
        fetchNextPage: fetchNextWorkoutPage,
        hasNextPage: hasNextWorkoutPage,
        isFetchingNextPage: isFetchingNextWorkoutPage,
      },
      challenge: {
        content: challenge?.pages?.flatMap(page => page?.results) ?? [],
        fetchNextPage: fetchNextChallengePage,
        hasNextPage: hasNextChallengePage,
        isFetchingNextPage: isFetchingNextChallengePage,
      },
      program: {
        content: program?.pages?.flatMap(page => page?.results) ?? [],
        fetchNextPage: fetchNextProgramPage,
        hasNextPage: hasNextProgramPage,
        isFetchingNextPage: isFetchingNextProgramPage,
      },
      recipe: {
        content: recipe?.pages?.flatMap(page => page?.results) ?? [],
        fetchNextPage: fetchNextRecipePage,
        hasNextPage: hasNextRecipePage,
        isFetchingNextPage: isFetchingNextRecipePage,
      },
      article: {
        content: article?.pages?.flatMap(page => page?.results) ?? [],
        fetchNextPage: fetchNextArticlePage,
        hasNextPage: hasNextArticlePage,
        isFetchingNextPage: isFetchingNextArticlePage,
      },
      howto: {
        content: howto?.pages?.flatMap(page => page?.results) ?? [],
        fetchNextPage: fetchNextHowToPage,
        hasNextPage: hasNextHowToPage,
        isFetchingNextPage: isFetchingNextHowToPage,
      },
    }[key]
  }

  return (
    <VStack direction="column" w="100%" gap="16px">
      <ChevronLeftIcon
        onClick={() => goBack(navigate)}
        cursor="pointer"
        w="50px"
        h="50px"
        position="absolute"
        left="8%"
      />
      <ProgramFilter
        activeProgramFilter={activeProgramFilter}
        setActiveProgramFilter={setActiveProgramFilter}
        types={ProgramFilterTypes}
      />

      <InfiniteScroll {...flattenedData(activeProgramFilter)} />
    </VStack>
  )
}
