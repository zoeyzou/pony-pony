import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit'

import loggerMiddleware from './utils/logger'
import counterReducer from './counter/slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: [loggerMiddleware, ...getDefaultMiddleware()],
})

export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
