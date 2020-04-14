import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Slider } from 'components/slider'
import { Select } from 'components/select'
import { selectSizeRange, selectDifficultyRange, selectSettings } from 'stores/settings/selectors'
import { changeWidth, changeHeight, changeDifficulty, changePony } from 'stores/settings/slice'
import { getSelectOptionsForPony } from './utils/helpers'
import * as s from './game-setting.styles'
import { Pony } from 'types/pony'

export const GameSetting = () => {
  const dispatch = useDispatch()
  const sizeRange = useSelector(selectSizeRange)
  const levelRange = useSelector(selectDifficultyRange)
  const { width, height, currentPony, difficultyLevel } = useSelector(selectSettings)

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
        value={difficultyLevel}
        title="Difficulty"
        onChangeHandler={(val) => dispatch(changeDifficulty(val))}
      />
      <Select
        defaultValue={(currentPony as string) || ''}
        options={getSelectOptionsForPony()}
        onChangeHandler={(val) => dispatch(changePony(val as Pony))}
      />
    </s.GameSettingWrapper>
  )
}
