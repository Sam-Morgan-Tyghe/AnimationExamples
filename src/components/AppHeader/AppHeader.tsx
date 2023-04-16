import { Flex } from '@chakra-ui/react'

import NavBar from '../NavBar'

// import { useNavigate } from 'react-router-dom'

export default function AppHeader() {
  // const navigate = useNavigate()

  // const goBack = () => {
  //   if (window.history.state && window.history.state.idx > 0) {
  //     navigate(-1)
  //   } else {
  //     navigate('/', { replace: true })
  //   }
  // }
  return (
    <Flex
      w="100%"
      align="center"
      justify="space-between"
      py="24px"
      gap="8px"
      p="32px"
    >
      <NavBar />
    </Flex>
  )
}
