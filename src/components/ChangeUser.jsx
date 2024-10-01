import { useDispatch } from 'react-redux'
import { changeUserName, toggleUserName } from '../redux/userSlice'
import styles from './ChangeUser.module.css'

function ChangeUser() {
  const dispatch = useDispatch()

  const handleChange = (event) => {
    dispatch(changeUserName(event.target.value)) // Dispatch action to change the user name
  }

  return (
    <div>
      <input
        className={styles['input-field']}
        type="text"
        placeholder="Enter New Name"
        onChange={handleChange}
        // className="input-field"
      />
      <button
        className={styles['change-button']}
        onClick={() => dispatch(toggleUserName())}
        // className="change-button"
      >
        Toggle User Name
      </button>
    </div>
  )
}

export default ChangeUser
