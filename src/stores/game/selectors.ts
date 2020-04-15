import { RootState } from '../store'

export const selectGame = (state: RootState) => state.game

export const selectMaze = (state: RootState) => state.game.mazeData

export const selectGameStatus = (state: RootState) => state.game.gameStatus

export const selectPonyPos = (state: RootState) => state.game.ponyPos

export const selectDomokunPos = (state: RootState) => state.game.domokunPos

export const selectExit = (state: RootState) => state.game.exit

export const selectFetchPending = (state: RootState) =>
  state.game.fetchingState.game === 'pending' || state.game.fetchingState.movement === 'pending'

export const selectHasStarted = (state: RootState) =>
  state.game.ponyPos !== null &&
  state.game.domokunPos !== null &&
  state.game.exit !== null &&
  state.game.mazeData.length > 0 &&
  state.game.gameStatus !== 'preparing'
