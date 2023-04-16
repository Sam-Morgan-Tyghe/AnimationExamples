import {
  Flex,
  SimpleGrid,
  Skeleton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { SearchByKeywordInTheTitleInAllModelsAll } from '~/api/types'
import { useGetInfiniteAPI } from '~/api/useHook'
import FilterTags from '~/components/FilterTags/FilterTags'
import { SearchInput } from '~/components/Inputs/SearchInput/SearchInput'
import ProgramFilter from '~/components/ProgramFilter'
import AllDiscovery from '~/containers/Discovery/AllDiscovery'
import TaggedDiscovery from '~/containers/Discovery/TaggedDiscovery'
import { InfiniteScroll } from '~/containers/InfiniteScroll'
import { discoveryfilterTypes } from '~/utils/consts/filterProgramTypes'

export default function Discovery(): JSX.Element {
  const [searchValue, setSearchValue] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [activeProgramFilter, setActiveProgramFilter] = useState('all')
  const { isOpen, onClose, onOpen } = useDisclosure()
  const [_showTagResults, setShowTagResults] = useState(false)

  useEffect(() => {
    if (selectedTags.length) setSearchValue('')
  }, [selectedTags])
  useEffect(() => {
    if (searchValue) setSelectedTags([])
  }, [searchValue])

  const [debouncedEndpoint] = useDebounce(
    `/content/search?q=${searchValue}&group=${activeProgramFilter}`,
    1000,
  )

  const {
    data: content,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useGetInfiniteAPI<SearchByKeywordInTheTitleInAllModelsAll>({
    endpoint: searchValue && debouncedEndpoint,
    data: { hasParams: true },
  })

  function SkeletonLoader() {
    return (
      <SimpleGrid columns={3} spacing="32px">
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
        <Skeleton h="320px" w="320px" />
      </SimpleGrid>
    )
  }
  return (
    <VStack>
      <Flex w="100%" gap="16px">
        <SearchInput
          placeholder={'Search'}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          isAdding={isLoading && !!searchValue}
        />
        <FilterTags
          type={activeProgramFilter}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
          setShowTagResults={setShowTagResults}
        />
      </Flex>
      <ProgramFilter
        activeProgramFilter={activeProgramFilter}
        setActiveProgramFilter={setActiveProgramFilter}
        types={discoveryfilterTypes}
      />

      {selectedTags.length && (
        <TaggedDiscovery
          endpoint={`/content/${activeProgramFilter}/?tage=${selectedTags.join(
            ',',
          )}`}
        />
      )}

      {searchValue &&
        (!isLoading ? (
          <InfiniteScroll
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            fetchNextPage={fetchNextPage}
            content={
              content?.pages?.flatMap(page => page?.results).filter(Boolean) ??
              []
            }
          />
        ) : (
          <SkeletonLoader />
        ))}
      {!selectedTags.length && !searchValue && (
        <AllDiscovery endpoint={`/content/discover/${activeProgramFilter}/`} />
      )}
    </VStack>
  )
}
