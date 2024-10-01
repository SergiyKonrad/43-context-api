import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
// userReducer = userSlice.reducer

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})
