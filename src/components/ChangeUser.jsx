import { useDispatch } from 'react-redux'
import { changeUserName, toggleUserName } from '../redux/userSlice'
import { useState } from 'react'
import styles from './ChangeUser.module.css'

function ChangeUser() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    dispatch(changeUserName(event.target.value)) // Dispatch action to change the user name
    setInputValue(event.target.value) // Update local input value
  }

  const handleClear = () => {
    setInputValue('')
    dispatch(changeUserName('')) // Optionally dispatch empty value
  }

  return (
    <div>
      <input
        className={styles['input-field']}
        type="text"
        placeholder="Enter New Name"
        value={inputValue}
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
      <button className={styles['clear-button']} onClick={handleClear}>
        Clear
      </button>
    </div>
  )
}

export default ChangeUser

/*---NB.---
In JavaScript, object property names with special characters, like hyphens, need to be accessed using bracket notation. If the class name didn't have a hyphen, you could use dot notation like;
 styles.inputField.   */
