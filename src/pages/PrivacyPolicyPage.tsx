import { Flex, Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { GETTermsAndConditions } from '~/api/types'
import { useGetAPI } from '~/api/useHook'
import ArrowBack from '~/assets/icons/arrow-back.svg'
import SVG from '~/components/SVG'

export default function PrivacyPolicyPage() {
  const { data } = useGetAPI<GETTermsAndConditions>({
    endpoint: '/terms/',
  })

  const navigate = useNavigate()
  return (
    <Flex direction="column" justify="center" align="center" gap="40px">
      <Flex direction="row" w="100%" justify="space-between" align="center">
        <Flex cursor="pointer" onClick={() => navigate(-1)}>
          <SVG src={ArrowBack} alt="" />
        </Flex>
        <Text>Privacy Policy</Text>
        <Flex />
      </Flex>
      <Text dangerouslySetInnerHTML={{ __html: data?.privacy_policy ?? '' }} />
    </Flex>
  )
}
