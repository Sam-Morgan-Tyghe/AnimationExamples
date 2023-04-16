import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { RetrieveALLTags, Tag } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import filter from '~/assets/icons/Filter.svg'
import { AnimateAllChildren } from '~/utils/animateChildren'
import { filterTypesTags } from '~/utils/consts/filterProgramTypes'

import FilterTagsModal from '../Modal'
import SVG from '../SVG'

export default function FilterTags({
  type = 'workout',
  setSelectedTags,
  selectedTags,
  isOpen,
  onOpen,
  setShowTagResults,
  onClose,
}: {
  type: string
  setSelectedTags: any
  selectedTags: any
  isOpen: boolean
  onOpen: (isOpen: boolean) => void
  setShowTagResults: (isOpen: boolean) => void
  onClose: (b: boolean) => void
}) {
  const { data: availableTags } = useGetAPI<RetrieveALLTags>({
    endpoint: `/content/${filterTypesTags(type)}/tags/`,
  })

  function handleTagClick(tag: Tag) {
    const index = selectedTags.indexOf(tag.id)
    if (index === -1) {
      setSelectedTags([...selectedTags, tag.id])
    } else {
      setSelectedTags([
        ...selectedTags.slice(0, index),
        ...selectedTags.slice(index + 1),
      ])
    }
  }
  return (
    <>
      <Flex
        as={Button}
        align="center"
        justify="center"
        cursor="pointer"
        onClick={() => onOpen(!isOpen)}
        h="65px"
      >
        <SVG src={filter} alt="" />
      </Flex>
      <FilterTagsModal
        isOpen={isOpen}
        toggleModal={onClose}
        setShowTagResults={setShowTagResults}
        setSelectedTags={setSelectedTags}
      >
        <Flex direction="column" p="24px 0px" gap="24px">
          {availableTags?.tag_groups &&
            availableTags.tag_groups.map((group, idx) => (
              <>
                <Flex key={group.tag_group} direction="column" gap="16px">
                  <Text fontWeight="700">{group.tag_group}</Text>
                  <Flex flexWrap="wrap" gap="8px">
                    <AnimateAllChildren
                      transitionVelocity={5}
                      withProps={false}
                    >
                      {group.tags.map(tag => (
                        <Button
                          key={tag.id}
                          p="8px 16px"
                          borderRadius="8px"
                          border="1px solid"
                          borderColor="rgba(0, 0, 0, 0.1)"
                          bg={selectedTags.includes(tag.id) ? 'black' : 'white'}
                          color={
                            selectedTags.includes(tag.id) ? 'white' : 'black'
                          }
                          fontWeight="400"
                          onClick={() => handleTagClick(tag)}
                        >
                          {tag.name}
                        </Button>
                      ))}
                    </AnimateAllChildren>
                  </Flex>
                </Flex>
                {availableTags.tag_groups.length - 1 !== idx && (
                  <Box w="100%" h="1px" bg="rgba(0, 0, 0, 0.1)" />
                )}
              </>
            ))}
        </Flex>
      </FilterTagsModal>
    </>
  )
}
