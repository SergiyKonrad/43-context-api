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
      //  Immer ( included with Redux Toolkit) allows  to write "mutating" code in the reducers
      state.name = action.payload
    },
    toggleUserName: (state) => {
      // console.log(state)
      console.log('Before Toggle:', state)
      console.log('Before State Name:', state.name)
      state.name = state.name === 'Sergiy' ? 'Mila' : 'Sergiy'
      console.log('After Toggle:', state)
      console.log('Current State Name:', state.name)
    },
  },
})

// Export the actions to use in components
export const { changeUserName, toggleUserName } = userSlice.actions
// Export the reducer to use in the store
export default userSlice.reducer
