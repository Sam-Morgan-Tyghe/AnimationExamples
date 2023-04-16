import { useState } from 'react'
import Disclaimer from '~/forms/AdditionaInfo/Disclaimer'
import Measurements from '~/forms/AdditionaInfo/Measurements'
import ProfilePicture from '~/forms/AdditionaInfo/ProfilePicture'

import LoginForm from '../forms/login/LoginForm'
import PersonalInfo from '../forms/login/PersonalInfo'
import SignUpConfirm from '../forms/login/SignUpConfirm'
import { loginPageTypes } from '../utils/consts/loginPageTypes'

interface LoginPage {
  key: string
  component: JSX.Element
}

export default function LoginFormContainer(): JSX.Element {
  const [currentPage, setCurrentPage] = useState<number>(0)

  const [loginUser, setLoginUser] = useState<{ username: string }>({
    username: '',
  })
  const [password, setPassword] = useState('')

  const setPageByKey = (key: string) => {
    setCurrentPage(loginPages.findIndex(page => page.key === key) ?? 0)
  }

  const loginPages: LoginPage[] = [
    {
      key: loginPageTypes.Login,
      component: (
        <LoginForm
          setPageByKey={setPageByKey}
          setLoginUser={setLoginUser}
          setPassword={setPassword}
        />
      ),
    },
    {
      key: loginPageTypes.SignUpConfirm,
      component: (
        <SignUpConfirm
          setPageByKey={setPageByKey}
          loginUser={loginUser}
          password={password}
        />
      ),
    },
    {
      key: 'personalInfo',
      component: (
        <PersonalInfo setPageByKey={setPageByKey} loginUser={loginUser} />
      ),
    },
    {
      key: 'profilePic',
      component: <ProfilePicture setPageByKey={setPageByKey} />,
    },
    {
      key: 'measurements',
      component: <Measurements setPageByKey={setPageByKey} />,
    },
    {
      key: 'disclaimer',
      component: <Disclaimer setPageByKey={setPageByKey} />,
    },
  ]
  // listenToAutoSignInEvent()
  return loginPages[currentPage].component
}
