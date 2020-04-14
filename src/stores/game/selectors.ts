import { RootState } from '../store'

export const selectMaze = (state: RootState) => state.game.mazeData

export const selectGameStatus = (state: RootState) => state.game.gameStatus

export const selectPonyPos = (state: RootState) => state.game.ponyPos

export const selectDomokunPos = (state: RootState) => state.game.domokunPos

export const selectExit = (state: RootState) => state.game.exit
