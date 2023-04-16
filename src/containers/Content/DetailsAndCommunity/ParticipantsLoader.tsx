import {
  Avatar,
  AvatarGroup,
  SkeletonCircle,
  SkeletonText,
} from '@chakra-ui/react'

export function ParticipantsLoader() {
  return (
    <>
      <SkeletonText>dummy loading text</SkeletonText>
      <AvatarGroup>
        <SkeletonCircle>
          <Avatar />
        </SkeletonCircle>
        <SkeletonCircle>
          <Avatar />
        </SkeletonCircle>
        <SkeletonCircle>
          <Avatar />
        </SkeletonCircle>
      </AvatarGroup>
    </>
  )
}
