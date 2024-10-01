import { useSelector } from 'react-redux'

function User() {
  const userName = useSelector((state) => state.user.name) // Get the user name from Redux store

  return <h1>User: {userName}</h1>
}

export default User
