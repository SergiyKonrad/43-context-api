import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: 'SK',
  },
  reducers: {
    changeUserName: (state, action) => {
      state.name = action.payload
    },
  },
})

export const { changeUserName } = userSlice.actions

// Export the reducer to be used in store
export default userSlice.reducer
