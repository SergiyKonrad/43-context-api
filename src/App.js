import './App.css'
import User from './components/User'
import ChangeUser from './components/ChangeUser'
import { Provider } from 'react-redux'
import { store } from './redux/store' // Import the store

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <User />
        <ChangeUser />
      </div>
    </Provider>
  )
}

export default App

// --- Second Approach (Direct Redux Usage in App.js):
// Simplicity for Small Apps and Control in One File.
/*
import { useSelector, useDispatch } from 'react-redux'
import { changeUserName } from './redux/userSlice'
import './App.css'
import User from './components/User'
import ChangeUser from './components/ChangeUser'

function App() {
 
  const userName = useSelector((state) => state.user.name)
  const dispatch = useDispatch() /
  return (
    <div className="App">
      <User />
      <ChangeUser />
      <button onClick={() => dispatch(changeUserName('New Name'))}>
        Change User Name
      </button>
    </div>
  )
}

export default App
*/
