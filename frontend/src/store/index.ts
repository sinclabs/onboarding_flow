import { configureStore } from '@reduxjs/toolkit'
import { flowSlice } from './slices/flow'
// ...

export const store = configureStore({
  reducer: {
    flow: flowSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch