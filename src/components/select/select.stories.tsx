import React from 'react'
import { Select } from '.'

export default {
  title: 'Components/Select',
  component: Select,
}

const defaultProps: React.ComponentProps<typeof Select> = {
  options: [
    { label: 'Monkey', value: 'money' },
    { label: 'Elephant', value: 'elephant' },
  ],
}

export const Default = () => <Select {...defaultProps} />

export const withTitle = () => <Select {...defaultProps} title="title" />
