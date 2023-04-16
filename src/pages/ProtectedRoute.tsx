// import { Auth } from 'aws-amplify'
// import { useEffect } from 'react'
// import { Outlet, useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

interface ProtectedRouteProps {
  children?: JSX.Element
  redirect: string
}

export function ProtectedRoute({
  children,
}: // redirect,
ProtectedRouteProps): JSX.Element {
  // const navigate = useNavigate()

  // TODO: uncomment after amplify is set up
  // useEffect(() => {
  //   const checkAuthState = async (): Promise<void> => {
  //     try {
  //       await Auth.currentAuthenticatedUser()
  //       navigate(redirect, { replace: true })
  //     } catch (err) {
  //       navigate('/login', { replace: true })
  //     }
  //   }
  //   checkAuthState()
  // })

  return children ? children : <Outlet />
}
