import React, { FC, useState, InputHTMLAttributes, ChangeEvent, useEffect } from 'react'

import * as s from './slider.styles'
import { Label } from 'components/label'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  value?: number
  onChangeHandler?: (val: number) => void
}

export const Slider: FC<Props> = ({
  min = 0,
  max = 10,
  value = 0,
  title,
  onChangeHandler,
  ...rest
}) => {
  const [val, setVal] = useState<number>(value)
  const [isPressed, setPressed] = useState<boolean>(false)

  useEffect(() => {
    if (!isPressed && val !== value) {
      onChangeHandler?.(val)
    }
  }, [val, value, isPressed, onChangeHandler])

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const evtVal = Number(evt.currentTarget.value)
    setVal(evtVal)
  }

  return (
    <s.SliderContainer>
      {title && <Label>{title}</Label>}
      <s.SliderWrapper>
        <s.Display>{min}</s.Display>
        <s.Slider
          {...rest}
          aria-label={rest['aria-label'] || 'range slider'}
          type="range"
          min={min}
          max={max}
          value={val}
          onMouseDown={() => setPressed(true)}
          onMouseUp={() => setPressed(false)}
          onChange={changeHandler}
        />
        <s.Display>{max}</s.Display>
      </s.SliderWrapper>
    </s.SliderContainer>
  )
}
