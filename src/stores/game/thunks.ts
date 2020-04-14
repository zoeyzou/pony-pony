import { AppThunk } from '../store'
import { initiateGame, setGameId, startFetching, errorFetching, finishFetching } from './slice'
import { getGameId, loadGame } from './api'
import { GameRequestBody } from './types'

export const getGameThunk = (request: GameRequestBody): AppThunk => async (dispatch) => {
  try {
    dispatch(startFetching())
    const idRes = await getGameId(request)
    dispatch(setGameId(idRes.maze_id))

    const game = await loadGame(idRes.maze_id)
    dispatch(initiateGame(game))
  } catch (e) {
    dispatch(errorFetching())
  } finally {
    dispatch(finishFetching())
  }
}
