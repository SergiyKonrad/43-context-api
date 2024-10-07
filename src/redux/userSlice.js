import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: 'SK', // Initial state for user
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeUserName: (state, action) => {
      console.log(action)
      state.name = action.payload
    },
    toggleUserName: (state) => {
      console.log(state)
      state.name = state.name === 'Sergiy' ? 'Mila' : 'Sergiy'
    },
  },
})

// Export the actions to use in components
export const { changeUserName, toggleUserName } = userSlice.actions

// Export the reducer to use in the store
export default userSlice.reducer
