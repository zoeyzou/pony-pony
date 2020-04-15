import React, { FC, useEffect, ReactNode } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Maze } from 'components/maze'
import { Image } from 'components/image'
import {
  selectGame,
  selectFetchPending,
  selectHasStarted,
  selectUrl,
  selectHasFinished,
} from 'stores/game/selectors'
import { selectSettings } from 'stores/settings/selectors'
import { movePonyThunk } from 'stores/game/slice'
import * as helpers from 'utils/keyboard-actions'
import ponyCover from 'assets/img/cover.png'

import * as s from './game.styles'
import { IMG_BASE_URL } from './utils/constants'

export const Game: FC = () => {
  const dispatch = useDispatch()
  const { width, height } = useSelector(selectSettings)
  const { mazeData, exit, ponyPos, domokunPos } = useSelector(selectGame)
  const hasStarted = useSelector(selectHasStarted)
  const hasFinished = useSelector(selectHasFinished)
  const isFetching = useSelector(selectFetchPending)
  const gameEndUrl = useSelector(selectUrl)

  useEffect(() => {
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

    if (hasStarted) {
      document.addEventListener('keydown', keyPressHandler)
    }
    return () => document.removeEventListener('keydown', keyPressHandler)
  }, [isFetching, hasStarted, dispatch])

  let image: ReactNode = null
  if (!hasStarted) {
    image = <Image src={ponyCover} />
  } else if (hasFinished) {
    image = <Image src={`${IMG_BASE_URL}${gameEndUrl}`} />
  }

  return (
    <s.GameWrapper>
      {image}
      {hasStarted && !hasFinished && (
        <Maze
          size={[width, height]}
          data={mazeData}
          domokunStartingPos={domokunPos!}
          ponyStartingPos={ponyPos!}
          endPointPos={exit!}
        />
      )}
    </s.GameWrapper>
  )
}
