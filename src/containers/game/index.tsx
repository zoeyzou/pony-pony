import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Maze } from 'components/maze'
import { Image } from 'components/image'
import { selectGame, selectFetchPending, selectHasStarted } from 'stores/game/selectors'
import { selectSettings } from 'stores/settings/selectors'
import { movePonyThunk } from 'stores/game/slice'
import * as helpers from 'utils/keyboard-actions'

import * as s from './game.styles'

export const Game: FC = () => {
  const dispatch = useDispatch()
  const { width, height } = useSelector(selectSettings)
  const { mazeData, exit, ponyPos, domokunPos } = useSelector(selectGame)
  const hasStarted = useSelector(selectHasStarted)
  const isFetching = useSelector(selectFetchPending)

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

    document.addEventListener('keydown', keyPressHandler)
    return () => document.removeEventListener('keydown', keyPressHandler)
  }, [isFetching])

  return (
    <s.GameWrapper>
      {!hasStarted && <Image src={`${process.env.PUBLIC_URL}/img/cover.png`} />}
      {hasStarted && (
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
