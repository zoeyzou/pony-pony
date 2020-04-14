export enum Pony {
  twilightSparkle = 'Twilight Sparkle',
  spike = 'Spike',
  applejack = 'Applejack',
  rainbowDash = 'Rainbow Dash',
  pinkiePie = 'Pinkie Pie',
  rarity = 'Rarity',
  fluttershy = 'Fluttershy',
}

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
