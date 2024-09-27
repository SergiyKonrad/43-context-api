import UserContext from '../context/UserContext'
import { useContext } from 'react'

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext)

  return (
    <button
      onClick={() => changeUserName(userName === 'Sergiy' ? 'Mila' : 'Sergiy')}
    >
      Change user
    </button>
  )
}

export default ChangeUser
