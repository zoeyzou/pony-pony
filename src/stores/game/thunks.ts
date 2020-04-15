import { AppThunk } from '../store'
import {
  initiateGame,
  setGameId,
  startFetching,
  errorFetching,
  finishFetching,
  setGameStatus,
  updateGame,
} from './slice'
import { getGameId, loadGame, movePony } from './api'
import { GameRequestBody } from './types'
import { Direction } from 'types/directions'

export const getGameThunk = (request: GameRequestBody): AppThunk => async (dispatch, getState) => {
  const state = getState()
  if (state.game.fetchingState.game === 'pending') {
    return
  }

  try {
    dispatch(startFetching('game'))
    const idRes = await getGameId(request)
    dispatch(setGameId(idRes.maze_id))

    const game = await loadGame(idRes.maze_id)
    dispatch(initiateGame(game))
  } catch (e) {
    dispatch(errorFetching('game'))
  } finally {
    dispatch(finishFetching('game'))
  }
}

export const movePonyThunk = (direction: Direction): AppThunk => async (dispatch, getState) => {
  const state = getState()
  const id = state.game.gameId
  if (state.game.fetchingState.movement === 'pending' || !id) {
    return
  }

  try {
    dispatch(startFetching('movement'))
    const moveRes = await movePony(id, direction)

    dispatch(setGameStatus(moveRes))

    if (moveRes.state === 'active') {
      const game = await loadGame(id)
      dispatch(updateGame(game))
    }
  } catch (e) {
    dispatch(errorFetching('movement'))
  } finally {
    dispatch(finishFetching('movement'))
  }
}
