import { useState } from 'react'
import { useParams } from 'react-router-dom'
import EditProfile from '~/components/EditProfile'
import Profile from '~/components/ProfilePage'
import ViewProfile from '~/containers/Profile/ViewProfile'

export default function ProfilePage(): JSX.Element {
  const [isEditing, setIsEditing] = useState(false)
  const { userId } = useParams()

  return (
    <>
      {userId ? (
        <ViewProfile />
      ) : !isEditing ? (
        <Profile isEditing={isEditing} setIsEditing={setIsEditing} />
      ) : (
        <EditProfile isEditing={isEditing} setIsEditing={setIsEditing} />
      )}
    </>
  )
}
