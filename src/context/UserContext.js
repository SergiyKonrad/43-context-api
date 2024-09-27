import React, { createContext } from 'react'

// Create Context with default values
const UserContext = createContext({
  userName: '',
  changeUserName: () => {},
})

export default UserContext
