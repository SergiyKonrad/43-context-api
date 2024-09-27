import { useState } from 'react'
import UserContext from './context/UserContext'
import './App.css'
import User from './components/User'
import ChangeUser from './components/ChangeUser'

function App() {
  const [user, setUser] = useState('SK')

  return (
    // Provide userName and changeUserName to all child components
    <UserContext.Provider value={{ userName: user, changeUserName: setUser }}>
      <div className="App">
        <User /> {/* Nested component */}
        <ChangeUser /> {/* Nested component */}
      </div>
    </UserContext.Provider>
  )
}

export default App
