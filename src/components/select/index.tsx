import React, { FC, useState, useEffect } from 'react'

import * as s from './select.styles'
import { SelectOption } from './utils/types'
import { Label } from 'components/label'

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  defaultValue?: string
  options: SelectOption<string>[]
  onChangeHandler?: (val: string) => void
}

export const Select: FC<Props> = ({
  defaultValue,
  options,
  title,
  placeholder,
  onChangeHandler,
  ...rest
}) => {
  const [val, setVal] = useState<string>(defaultValue || '')

  useEffect(() => {
    if (val !== defaultValue) {
      onChangeHandler?.(val)
    }
  }, [val, defaultValue, onChangeHandler])

  const changeHandler = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const evtVal = evt.currentTarget.value
    setVal(evtVal)
  }

  return (
    <s.SelectWrapper>
      {title && <Label>{title}</Label>}
      <s.Select {...rest} onChange={changeHandler} defaultValue={val}>
        <s.Option key="empty" value="">
          {placeholder || 'Please choose an option'}
        </s.Option>
        {options.map((option, index) => (
          <s.Option key={index} value={option.value}>
            {option.label}
          </s.Option>
        ))}
      </s.Select>
    </s.SelectWrapper>
  )
}
