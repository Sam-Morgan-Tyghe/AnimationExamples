import { CloseIcon, SearchIcon } from '@chakra-ui/icons'
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spinner,
} from '@chakra-ui/react'

interface SearchInputProps {
  placeholder: string
  isAdding?: boolean
  searchValue: string
  setSearchValue: (value: any) => void
}

export function SearchInput({
  searchValue,
  isAdding,
  setSearchValue,
  placeholder,
}: SearchInputProps) {
  return (
    <InputGroup w="100%">
      <InputLeftElement pointerEvents="none">
        <SearchIcon color="neutral.gray.600" />
      </InputLeftElement>
      <InputRightElement
        pointerEvents="none"
        display="flex"
        gap="16px"
        py="16px"
        w="90px"
      >
        {isAdding && <Spinner size="sm" />}
        {searchValue && (
          <CloseIcon cursor="pointer" onClick={() => setSearchValue('')} />
        )}
      </InputRightElement>
      <Input
        type="text"
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        placeholder={placeholder}
      />
    </InputGroup>
  )
}
