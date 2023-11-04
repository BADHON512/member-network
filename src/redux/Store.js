import { configureStore } from '@reduxjs/toolkit'
import { UserReducer } from './Reducer/user'

export const Store = configureStore({
  reducer: {
    user:UserReducer,
    
  },
})

export const FURL="https://member-network-server.vercel.app/api/v2"