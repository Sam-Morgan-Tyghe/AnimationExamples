import {
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { Auth } from 'aws-amplify'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { GETHOMECombinedData } from '~/api/types'
import { useGetAPI } from '~/api/useHook'

import Logo from '../../assets/icons/Logo_dark.svg'
import user from '../../assets/icons/User.svg'
import calendar from '../../assets/icons/calendar.svg'
import Home from '../../assets/icons/home.svg'
import lens from '../../assets/icons/lens.svg'
import notificationBell from '../../assets/icons/notification_bell.svg'
import NotificationList from '../NotificationList'
import SVG from '../SVG'

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { data: home } = useGetAPI<GETHOMECombinedData>({
    endpoint: '/home/all/',
  })
  const { pathname } = useLocation()
  const isCalender = pathname.includes('calender')
  const isDiscover = pathname.includes('discover')
  const isHome = !(isCalender || isDiscover)

  const navigate = useNavigate()

  return (
    <Flex justify="space-between" align="center" w="100%">
      <Link to="/">
        <SVG src={Logo} alt="Logo" />
      </Link>
      <Flex align="center" gap="16px">
        <Button
          size="lg"
          variant={isHome ? 'active' : 'white'}
          leftIcon={<SVG src={Home} alt="home" />}
          to="/"
          as={Link}
        >
          Home
        </Button>
        <Button
          size="lg"
          variant={isDiscover ? 'active' : 'white'}
          leftIcon={<SVG src={lens} alt="lens" />}
          to="/discover"
          as={Link}
        >
          Discover
        </Button>
        <Button
          size="lg"
          variant={isCalender ? 'active' : 'white'}
          leftIcon={<SVG src={calendar} alt="calendar" />}
          to="/calender"
          as={Link}
        >
          Calendar
        </Button>
      </Flex>
      <Flex align="center" gap="16px">
        <Flex position="relative">
          <Flex
            w="40px"
            h="40px"
            borderRadius="8px"
            p="8px"
            _hover={{ background: 'rgba(15, 21, 38, 0.04)' }}
            cursor="pointer"
            onClick={onOpen}
          >
            <SVG src={notificationBell} alt="notification bell" />
          </Flex>
          <NotificationList isOpen={isOpen} onClose={onClose} />
        </Flex>
        <Menu>
          <MenuButton
            as={Button}
            background="white"
            rightIcon={<SVG src={user} alt="user" />}
          >
            <Text fontWeight="700">{home?.first_name}</Text>
          </MenuButton>
          <MenuList>
            <MenuItem as={Link} to="/profile">
              View Profile
            </MenuItem>
            <MenuItem as={Link} to="/settings">
              Settings
            </MenuItem>
            <MenuItem
              onClick={async () => {
                try {
                  await Auth.signOut()
                } catch (error) {
                  console.log('error signing out: ', error)
                }
                navigate('/login')
              }}
              w="100%"
            >
              Sign out
            </MenuItem>
          </MenuList>
        </Menu>
        {/* <Flex
          cursor="pointer"
          align="center"
          onClick={() => {
            navigate('/profile')
          }}
        >
          <SVG src={user} alt="user" />
          <Text fontWeight="700">Millie</Text>
        </Flex> */}
      </Flex>
    </Flex>
  )
}
