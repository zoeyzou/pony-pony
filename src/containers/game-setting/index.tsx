import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Slider } from 'components/slider'
import { Select } from 'components/select'
import { selectSizeRange, selectDifficultyRange, selectSettings } from 'stores/settings/selectors'
import { changeWidth, changeHeight, changeDifficulty, changePony } from 'stores/settings/slice'
import { selectHasStarted } from 'stores/game/selectors'
import { Pony } from 'types/pony'

import { getSelectOptionsForPony } from './utils/helpers'
import * as s from './game-setting.styles'
import { Instructions } from './components/instructions'

export const GameSetting = () => {
  const dispatch = useDispatch()
  const sizeRange = useSelector(selectSizeRange)
  const levelRange = useSelector(selectDifficultyRange)
  const { width, currentPony, difficultyLevel } = useSelector(selectSettings)
  const hasGameStarted = useSelector(selectHasStarted)

  const changeSize = (val: number) => {
    dispatch(changeWidth(val))
    dispatch(changeHeight(val))
  }

  return (
    <s.GameSettingWrapper>
      {hasGameStarted && <Instructions />}
      {!hasGameStarted && (
        <>
          <Slider
            min={sizeRange[0]}
            max={sizeRange[1]}
            value={width}
            title="Size"
            onChangeHandler={changeSize}
          />
          <Slider
            min={levelRange[0]}
            max={levelRange[1]}
            value={difficultyLevel}
            title="Difficulty"
            onChangeHandler={(val) => dispatch(changeDifficulty(val))}
          />
          <Select
            defaultValue={(currentPony as string) || ''}
            options={getSelectOptionsForPony()}
            onChangeHandler={(val) => dispatch(changePony(val as Pony))}
          />
        </>
      )}
    </s.GameSettingWrapper>
  )
}
