import React, { FC } from 'react'

import * as s from './select.styles'
import { SelectOption } from './utils/types'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[]
}

export const Select: FC<Props> = ({ onChange, options, ...rest }) => (
  <s.SelectWrapper>
    <s.Select {...rest} onChange={onChange}>
      {options.map((option, index) => (
        <s.Option key={index} value={option.value}>
          {option.label}
        </s.Option>
      ))}
    </s.Select>
  </s.SelectWrapper>
)
