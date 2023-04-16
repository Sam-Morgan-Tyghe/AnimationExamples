import { Flex } from '@chakra-ui/react'
import { Outlet } from 'react-router'
import { AppHeader } from '~/components/AppHeader'
import { ProtectedRoute } from '~/pages/ProtectedRoute'
import { TraverseAndAnimate } from '~/utils/animateChildren'

export default function AppLayout() {
  return (
    <ProtectedRoute redirect="/">
      <Flex w="100%" direction="column">
        <TraverseAndAnimate>
          <AppHeader />
          <Flex
            sx={{ '& > *': { px: '208px', py: '40px', pb: '120px' } }}
            w="100%"
            direction="column"
            maxH="100vh"
            overflow="auto"
          >
            <Outlet />
          </Flex>
        </TraverseAndAnimate>
      </Flex>
    </ProtectedRoute>
  )
}
