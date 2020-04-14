import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Slider } from 'components/slider'
import { Select } from 'components/select'
import {
  selectSizeRange,
  selectWidth,
  selectHeight,
  selectDifficultyRange,
  selectDifficulty,
  selectPony,
} from 'stores/settings/selectors'
import { changeWidth, changeHeight, changeDifficulty, changePony } from 'stores/settings/slice'
import { getSelectOptionsForPony } from './utils/helpers'
import * as s from './game-setting.styles'
import { Pony } from 'types/pony'

export const GameSetting = () => {
  const dispatch = useDispatch()
  const sizeRange = useSelector(selectSizeRange)
  const width = useSelector(selectWidth)
  const height = useSelector(selectHeight)
  const levelRange = useSelector(selectDifficultyRange)
  const level = useSelector(selectDifficulty)
  const pony = useSelector(selectPony)

  return (
    <s.GameSettingWrapper>
      <Slider
        min={sizeRange[0]}
        max={sizeRange[1]}
        value={width}
        title="Width"
        onChangeHandler={(val) => dispatch(changeWidth(val))}
      />
      <Slider
        min={sizeRange[0]}
        max={sizeRange[1]}
        value={height}
        title="Height"
        onChangeHandler={(val) => dispatch(changeHeight(val))}
      />
      <Slider
        min={levelRange[0]}
        max={levelRange[1]}
        value={level}
        title="Difficulty"
        onChangeHandler={(val) => dispatch(changeDifficulty(val))}
      />
      <Select
        defaultValue={(pony as string) || ''}
        options={getSelectOptionsForPony()}
        onChangeHandler={(val) => dispatch(changePony(val as Pony))}
      />
    </s.GameSettingWrapper>
  )
}
