import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'

import clientQuizReducer from '../modules/quiz/client/duck'

import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState } from '../modules'

export const store = configureStore({
  reducer: {
    clientQuiz: clientQuizReducer
  }
})

export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector