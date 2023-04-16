import { Flex, Text } from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import { RetrieveASinglePROGRAMAlongsideWithAssociatedVideos } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import { EquipmentNeededLoader } from './EquipmentNeededLoader'

export function EquipmentNeeded() {
  const { contentType, contentId } = useParams()

  const { data: contentDetails, isLoading } =
    useGetAPI<RetrieveASinglePROGRAMAlongsideWithAssociatedVideos>({
      endpoint: `/content/${contentType}/${contentId}`,
    })

  return (
    <>
      {isLoading ? (
        <EquipmentNeededLoader />
      ) : (
        contentDetails?.equipment && (
          <Flex direction="column" gap="16px">
            <Text color="primary.neutral.975" fontWeight={900} fontSize="20px">
              Equipment needed
            </Text>
            <Flex wrap="wrap">
              {contentDetails?.equipment?.map(equipment => (
                <Text
                  key={equipment?.id}
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
                  {equipment?.name}
                </Text>
              ))}
            </Flex>
          </Flex>
        )
      )}
    </>
  )
}
