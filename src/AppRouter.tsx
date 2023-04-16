import { StrictMode } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './layouts/AppLayout'
import Calender from './pages/Calender'
import Content from './pages/Content'
import Discovery from './pages/Discovery'
import Favorites from './pages/Favorites'
import Payment from './pages/Payment'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import SignOut from './pages/SignOut'
import TermsPage from './pages/Terms'
import Home from './pages/home'
import Login from './pages/login'
import Welcome from './pages/welcome'
import NotificationsPage from './pages/Notifications'

const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '/welcome',
        element: <Welcome />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/discover',
        element: <Discovery />,
      },
      {
        path: '/payment',
        element: <Payment />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
      {
        path: '/calender',
        element: <Calender />,
      },
      {
        path: '/profile',
        element: <Profile />,
        children: [{ path: '/profile/:userId', element: <Profile /> }],
      },
      {
        path: '/notifications',
        element: <NotificationsPage />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/terms',
        element: <TermsPage />,
      },
      {
        path: '/privacyPolicy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: '/signout',
        element: <SignOut />,
      },
      {
        path: '/content/:contentType/:contentId',
        element: <Content />,
      },
    ],
  },
])

export default function AppRouter() {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}
