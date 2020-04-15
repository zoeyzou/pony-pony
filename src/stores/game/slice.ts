import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MazeResponse, GameState as State } from 'types/maze'
import { GameState, FetchingKey } from './types'

import * as thunks from './thunks'

const initialState: GameState = {
  gameId: null,
  mazeData: [],
  gameStatus: 'preparing',
  ponyPos: null,
  domokunPos: null,
  exit: null,
  fetchingState: { game: 'finish', movement: 'finish' },
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setGameId: (state, action: PayloadAction<string>) => {
      state.gameId = action.payload
    },
    initiateGame: (state, action: PayloadAction<MazeResponse>) => {
      const {
        data,
        pony: [ponyPos],
        domokun: [domokunPos],
        'end-point': [exit],
      } = action.payload
      state.mazeData = data
      state.ponyPos = ponyPos
      state.domokunPos = domokunPos
      state.exit = exit
      state.gameStatus = 'active'
    },
    startFetching: (state, action: PayloadAction<FetchingKey>) => {
      state.fetchingState[action.payload] = 'pending'
    },
    finishFetching: (state, action: PayloadAction<FetchingKey>) => {
      state.fetchingState[action.payload] = 'finish'
    },
    errorFetching: (state, action: PayloadAction<FetchingKey>) => {
      state.fetchingState[action.payload] = 'error'
    },
    setGameStatus: (state, action: PayloadAction<State>) => {
      state.gameStatus = action.payload.state
    },
    updateGame: (state, action: PayloadAction<MazeResponse>) => {
      const {
        pony: [ponyPos],
        domokun: [domokunPos],
      } = action.payload
      state.ponyPos = ponyPos
      state.domokunPos = domokunPos
    },
    resetGame: (state) => {
      state.gameId = null
      state.mazeData = []
      state.gameStatus = 'preparing'
      state.ponyPos = null
      state.domokunPos = null
      state.exit = null
      state.fetchingState = { game: 'finish', movement: 'finish' }
    },
  },
})

export const {
  setGameId,
  initiateGame,
  startFetching,
  errorFetching,
  finishFetching,
  setGameStatus,
  updateGame,
  resetGame,
} = gameSlice.actions

export const { getGameThunk, movePonyThunk } = thunks

export default gameSlice.reducer
