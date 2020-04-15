import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGameThunk } from 'stores/game/slice'
import { Maze } from 'components/maze'
import { Image } from 'components/image'
import { selectGame, selectFetchPending } from 'stores/game/selectors'
import { selectSettings } from 'stores/settings/selectors'
import { movePonyThunk } from 'stores/game/thunks'
import * as helpers from 'utils/keyboard-actions'

import * as s from './game.styles'

export const Game: FC = () => {
  const dispatch = useDispatch()
  const { width, height, difficultyLevel, currentPony } = useSelector(selectSettings)
  const { mazeData, exit, ponyPos, domokunPos } = useSelector(selectGame)
  const isFetching = useSelector(selectFetchPending)

  useEffect(() => {
    if (currentPony) {
      dispatch(getGameThunk({ width, height, difficulty: difficultyLevel, pony: currentPony }))
    }
  }, [width, height, difficultyLevel, currentPony, dispatch])

  const keyPressHandler = (evt: KeyboardEvent) => {
    evt.preventDefault()
    evt.stopPropagation()

    if (isFetching) {
      return
    }

    const { key } = evt
    const direction = helpers.getDirectionByKey(key)

    if (direction) {
      dispatch(movePonyThunk(direction))
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keyPressHandler)
    return () => document.removeEventListener('keydown', keyPressHandler)
  }, [keyPressHandler])

  return (
    <s.GameWrapper>
      {!currentPony && <Image src={`${process.env.PUBLIC_URL}/img/cover.png`} />}
      {mazeData.length > 0 && domokunPos && ponyPos && exit && (
        <Maze
          size={[width, height]}
          data={mazeData}
          domokunStartingPos={domokunPos}
          ponyStartingPos={ponyPos}
          endPointPos={exit}
        />
      )}
    </s.GameWrapper>
  )
}
