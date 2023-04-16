import { Button, Flex, Text } from '@chakra-ui/react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Details(): JSX.Element {
  // const { detailsId } = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1)
    } else {
      navigate('/', { replace: true })
    }
  }

  const { pathname } = useLocation()
  // const isWorkout = pathname.includes('workout')
  // const isChallenge = pathname.includes('challenge')
  // const isProgram = pathname.includes('program')
  // const isArticle = pathname.includes('article')
  // const isRecipe = pathname.includes('recipe')
  // const isDiscover = pathname.includes('discover')

  return (
    <Flex>
      <Button onClick={goBack}>Return</Button>
      <Text>Details</Text>
      <Text>{pathname}</Text>
    </Flex>
  )
}
