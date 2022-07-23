import { configureStore } from '@reduxjs/toolkit'
import recommendReducer from './recommend'

const store = configureStore({
  reducer: {
    recommend: recommendReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export default store
