import { useDispatch } from 'react-redux'
import { useState } from 'react'
import styles from './ChangeUser.module.css'

function ChangeUser() {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
    // Dispatch the async action for changing the user name
    dispatch({ type: 'user/changeUserNameAsync', payload: event.target.value })
  }

  const handleClear = () => {
    setInputValue('')
    dispatch({ type: 'user/changeUserNameAsync', payload: '' })
  }

  return (
    <div>
      <input
        className={styles['input-field']}
        type="text"
        placeholder="Enter New Name"
        onChange={handleChange}
        value={inputValue}
      />
      <button
        className={styles['change-button']}
        onClick={() => dispatch({ type: 'user/toggleUserNameAsync' })}
        // Dispatch async toggle action
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
