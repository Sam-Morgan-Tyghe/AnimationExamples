import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { RetrieveASinglePROGRAMAlongsideWithAssociatedVideos } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import { MuscleGroupLoader } from './MuscleGroupLoader'

export function MuscleGroup() {
  const { contentType, contentId } = useParams()

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASinglePROGRAMAlongsideWithAssociatedVideos>({
      endpoint: `/content/${contentType}/${contentId}`,
    })

  return (
    <>
      {isLoading ? (
        <MuscleGroupLoader />
      ) : (
        contentDetails?.muscle_group && (
          <Flex direction="column" gap="16px">
            <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
              Muscle group
            </Text>
            <Flex wrap="wrap">
              {contentDetails?.muscle_group?.map(muscleTag => (
                <Text
                  key={muscleTag.id}
                  p="8px 16px"
                  borderRadius="8px"
                  border="1px solid"
                  borderColor="rgba(0, 0, 0, 0.1)"
                  bg={'white'}
                  color={'black'}
                  fontWeight="800"
                  w="fit-content"
                  fontSize="14px"
                >
                  {muscleTag.name}
                </Text>
              ))}
            </Flex>
          </Flex>
        )
      )}
    </>
  )
}
