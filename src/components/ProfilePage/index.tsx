import {
  Avatar,
  Button,
  Flex,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import {
  GetListOfProgressPhotos,
  GetListOfProgressPhotosResult,
  GetUserProfile,
} from '~/api/types'
import { useGetAPI, useGetInfiniteAPI } from '~/api/useHook'
import moreHorizontalIcon from '~/assets/icons/MoreHorizontal.svg'
import pencil from '~/assets/icons/pencil.svg'
import SVG from '~/components/SVG'
import StatsList from '~/components/StatsList'
import UploadImageBtn from '~/components/UploadImagesBtn'
import { AnimateAllChildren } from '~/utils/animateChildren'
import { formatDate } from '~/utils/helper'

import DeleteModal from '../DeleteModal'

type editProfileProps = {
  isEditing: boolean
  setIsEditing: (bool: boolean) => void
}

export default function Profile({
  isEditing,
  setIsEditing,
}: editProfileProps): JSX.Element {
  const [isDeleting, setIsDeleting] = useState(false)
  const [, setProgressPhotos] = useState<GetListOfProgressPhotosResult[]>()
  const [currentProgressPhotos, setCurrentProgressPhotos] =
    useState<GetListOfProgressPhotosResult>()
  const [isUploadComplete, setIsUploadComplete] = useState(false)
  const { data } = useGetAPI<GetUserProfile>({
    endpoint: `/user/profile/all/`,
  })
  const { data: progressPhotosResults } =
    useGetInfiniteAPI<GetListOfProgressPhotos>({
      endpoint: '/user/progress-photo/',
    })

  const progressPhotos =
    progressPhotosResults?.pages
      ?.flatMap(page => page?.results)
      .filter(Boolean) ?? []
  return (
    <>
      <Flex direction="column" align="center" gap="32px">
        <Avatar
          w="120px"
          h="120px"
          src={data?.profile_photo}
          name={data?.full_name}
        />
        <Flex direction="column" align="center" gap="12px">
          <Text fontWeight="900" fontSize="32px">
            {data?.full_name}
          </Text>
          <Text
            fontWeight="400"
            fontSize="14px"
            color="black"
            opacity="0.4"
            letterSpacing="0.005em"
          >{`@${data?.username}`}</Text>
        </Flex>
        <Button
          variant="white"
          onClick={() => setIsEditing(!isEditing)}
          leftIcon={<SVG src={pencil} alt="" />}
        >
          Edit profile
        </Button>
        <Flex direction="row" justify="space-between" gap="150px" w="100%">
          <Flex direction="column" gap="16px" w="50%">
            <Flex direction="row" justify="space-between">
              <Text fontWeight="900" fontSize="20px" letterSpacing="0.01em">
                Statistic
              </Text>
            </Flex>
            <StatsList type="profile" statistics={data?.statistics} />
          </Flex>
          <Flex direction="column" gap="40px" w="50%">
            <Flex direction="row" justify="space-between" align="center">
              <Text fontWeight="900" fontSize="20px" letterSpacing="0.01em">
                Progress
              </Text>
              <UploadImageBtn
                isUploadComplete={isUploadComplete}
                setIsUploadComplete={setIsUploadComplete}
              />
            </Flex>
            <Flex direction="column" gap="50px">
              <AnimateAllChildren>
                {progressPhotos?.map(photo => (
                  <Flex key={photo.id} direction="column" gap="16px">
                    <Flex justify="space-between" align="center">
                      <Text fontWeight="700" fontSize="16px">
                        {formatDate(String(photo.created_at))}
                      </Text>
                      <Flex justify="center" align="center" cursor="pointer">
                        <Menu>
                          <MenuButton
                            as={Button}
                            bg="white"
                            alignItems="center"
                          >
                            <SVG src={moreHorizontalIcon} alt="" />
                          </MenuButton>
                          <MenuList>
                            <MenuItem>
                              <Text>Edit</Text>
                            </MenuItem>
                            <MenuItem
                              onClick={() => {
                                setIsDeleting(!isDeleting)
                                setCurrentProgressPhotos(photo)
                              }}
                            >
                              <Text>Delete</Text>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </Flex>
                    </Flex>
                    <Flex flexWrap="wrap" justify="space-between" gap="8px">
                      <Image
                        w="160px"
                        h="160px"
                        borderRadius="8px"
                        objectFit="cover"
                        src={photo.front_image_url}
                        alt="front"
                      />
                      <Image
                        w="160px"
                        h="160px"
                        borderRadius="8px"
                        objectFit="cover"
                        src={photo.side_image_url}
                        alt="side"
                      />
                      <Image
                        w="160px"
                        h="160px"
                        borderRadius="8px"
                        objectFit="cover"
                        src={photo.back_image_url}
                        alt="back"
                      />
                    </Flex>
                  </Flex>
                ))}
              </AnimateAllChildren>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <DeleteModal
        isOpen={isDeleting}
        onClose={setIsDeleting}
        currentProgressPhotos={currentProgressPhotos}
        progressPhotos={progressPhotos}
        setProgressPhotos={setProgressPhotos}
      />
    </>
  )
}
