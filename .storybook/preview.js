import { addDecorator } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { ThemeProvider } from 'styled-components'
import React from 'react'
import { theme } from 'sc/theme'

export const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>{typeof storyFn === 'function' ? storyFn() : storyFn}</ThemeProvider>
)

addDecorator(withA11y)
addDecorator(ThemeDecorator)
