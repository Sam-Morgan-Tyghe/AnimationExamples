import { Flex, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GETHOMECombinedData } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import DatePicker from '~/components/DatePicker'
import NoWorkoutCard from '~/components/NoWorkoutCard'
import StatsList from '~/components/StatsList'
import WorkoutCardThumbnail from '~/components/WorkoutCard/WorkoutCardThumbnail'
import { getWelcomeMessageByTime } from '~/utils/helper'

export default function Home(): JSX.Element {
  const { data: home } = useGetAPI<GETHOMECombinedData>({
    endpoint: '/home/all/',
  })
  const { data: allDates } = useGetAPI<string[]>({
    endpoint: '/schedule/dates/',
  })

  useEffect(() => {
    const p = 'spt'
    const urlParams = new URLSearchParams(window.location.search)
    const myParam = urlParams.get(p)
    if (myParam) {
      // Save myParam to localStorage
      localStorage.setItem(p, myParam)
      // Remove myParam from the URL
      const newUrl = window.location.href.replace(`?${p}=${myParam}`, '')
      window.history.replaceState({}, document.title, newUrl)

      // Update user attribute in Cognito
      Auth.currentAuthenticatedUser().then(user => {
        Auth.updateUserAttributes(user, {
          isSubscribed: myParam,
        })
      })
    }
  }, [])

  return (
    <Flex direction="column" gap="26px">
      <Flex w="100%" justifyContent="space-between">
        <VStack alignItems="flex-start">
          <Text color="secondary.black.100" opacity={0.4}>
            {getWelcomeMessageByTime()}
          </Text>
          <Text fontSize="40px" fontWeight="900" color="secondary.black.100">
            {home?.first_name}
          </Text>
        </VStack>
        <DatePicker dateData={allDates ?? []} />
      </Flex>
      {home?.today ? (
        <>
          <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
            Today
          </Text>
          <SimpleGrid columns={2} spacing="32px">
            <WorkoutCardThumbnail {...home?.today} />
            <NoWorkoutCard />
          </SimpleGrid>
        </>
      ) : (
        <NoWorkoutCard />
      )}
      <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
        Statistics
      </Text>
      <StatsList statistics={home?.statistics} />
      {home?.favourites.length ? (
        <>
          <Flex justifyContent="space-between">
            <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
              Favorites
            </Text>
            <Text
              color="primary.neutral.975"
              fontWeight={800}
              fontSize="14px"
              as={Link}
              to={'/Favorites'}
            >
              See All
            </Text>
          </Flex>
          <SimpleGrid columns={3} spacing="32px">
            {home?.favourites.map(favorite => (
              <WorkoutCardThumbnail
                key={favorite.id}
                height="320px"
                width="320px"
                {...favorite}
              />
            ))}
          </SimpleGrid>
        </>
      ) : (
        <></>
      )}
    </Flex>
  )
}
