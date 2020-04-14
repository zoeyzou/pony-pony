import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { SettingsState, Pony } from './types'

const initialState: SettingsState = {
  minLength: 15, // these can also be get from the API
  maxLength: 15,
  width: 15,
  height: 15,
  minDifficulty: 0,
  maxDifficulty: 10,
  difficultyLevel: 0,
  currentPony: null,
}

export const SettingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    changeWidth: (state, action: PayloadAction<number>) => {
      state.width = action.payload
    },
    changeHeight: (state, action: PayloadAction<number>) => {
      state.height = action.payload
    },
    changeDifficulty: (state, action: PayloadAction<number>) => {
      state.difficultyLevel = action.payload
    },
    changePony: (state, action: PayloadAction<Pony>) => {
      state.currentPony = action.payload
    },
  },
})

export const { changeWidth, changeHeight, changeDifficulty, changePony } = SettingsSlice.actions

export default SettingsSlice.reducer
