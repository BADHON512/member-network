import { configureStore } from '@reduxjs/toolkit'
import { UserReducer } from './Reducer/user'

export const Store = configureStore({
  reducer: {
    user:UserReducer,
    
  },
})

export const FURL="http://localhost:5000/api/v2"