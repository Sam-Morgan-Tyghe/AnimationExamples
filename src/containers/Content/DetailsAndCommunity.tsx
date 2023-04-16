import { Flex, SimpleGrid } from '@chakra-ui/react'

import { CommentSection } from './DetailsAndCommunity/CommentSection/Comment'
import { ContentNote } from './DetailsAndCommunity/Notes/ContentNote'
import { EquipmentNeeded } from './DetailsAndCommunity/EquipmentNeeded'
import { MuscleGroup } from './DetailsAndCommunity/MuscleGroup'
import { Participants } from './DetailsAndCommunity/Participants'
import { TruncatedDescription } from './DetailsAndCommunity/TruncatedDescription'
import { NextWorkout } from './DetailsAndCommunity/nextWorkout'

export function DetailsAndCommunity() {
  return (
    <SimpleGrid columns={2} spacing="120px" w="100%">
      <Flex direction="column" gap="40px" py="40px" w="100%">
        <Participants />

        <ContentNote />
        <TruncatedDescription />
        <MuscleGroup />

        <EquipmentNeeded />

        <NextWorkout />
      </Flex>
      <Flex direction="column" gap="40px" py="40px" w="100%">
        <CommentSection />
      </Flex>
    </SimpleGrid>
  )
}
