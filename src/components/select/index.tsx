import React, { FC } from 'react'

import * as s from './select.styles'
import { SelectOption } from './utils/types'
import { Label } from 'components/label'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption<string>[]
}

export const Select: FC<Props> = ({ onChange, options, title, ...rest }) => (
  <s.SelectWrapper>
    {title && <Label>{title}</Label>}
    <s.Select {...rest} onChange={onChange}>
      {options.map((option, index) => (
        <s.Option key={index} value={option.value}>
          {option.label}
        </s.Option>
      ))}
    </s.Select>
  </s.SelectWrapper>
)
