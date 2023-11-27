import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Redux/Slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
