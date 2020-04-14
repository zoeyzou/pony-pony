import { RootState } from '../store'

export const selectSettings = (state: RootState) => state.settings

export const selectSizeRange = (state: RootState) => [
  state.settings.minLength,
  state.settings.maxLength,
]

export const selectDifficultyRange = (state: RootState) => [
  state.settings.minDifficulty,
  state.settings.maxDifficulty,
]

export const selectWidth = (state: RootState) => state.settings.width

export const selectHeight = (state: RootState) => state.settings.height

export const selectDifficulty = (state: RootState) => state.settings.difficultyLevel

export const selectPony = (state: RootState) => state.settings.currentPony
