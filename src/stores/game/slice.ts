import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { MazeResponse } from 'types/maze'
import { GameState } from './types'

import * as thunks from './thunks'

const initialState: GameState = {
  gameId: null,
  mazeData: [],
  gameStatus: 'preparing',
  ponyPos: null,
  domokunPos: null,
  exit: null,
  fetchingState: 'finish',
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
    },
    startFetching: (state) => {
      state.fetchingState = 'pending'
    },
    finishFetching: (state) => {
      state.fetchingState = 'finish'
    },
    errorFetching: (state) => {
      state.fetchingState = 'error'
    },
  },
})

export const {
  setGameId,
  initiateGame,
  startFetching,
  errorFetching,
  finishFetching,
} = gameSlice.actions

export const { getGameThunk } = thunks

export default gameSlice.reducer
