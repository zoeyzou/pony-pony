import { Pony } from 'types/pony'

export interface SettingsState {
  minLength: number
  maxLength: number
  width: number
  height: number
  minDifficulty: number
  maxDifficulty: number
  difficultyLevel: number
  currentPony: Pony | null
}
