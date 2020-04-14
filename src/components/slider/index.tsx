import React, { FC } from 'react'

import * as s from './slider.styles'
import { Label } from 'components/label'

type Props = React.InputHTMLAttributes<HTMLInputElement>

export const Slider: FC<Props> = ({ min = 0, max = 10, value, title, ...rest }) => (
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
        value={value}
      />
      <s.Display>{max}</s.Display>
    </s.SliderWrapper>
  </s.SliderContainer>
)
