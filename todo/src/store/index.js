import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/Todo/store/reducer'

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
})