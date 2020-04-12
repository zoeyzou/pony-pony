import React from 'react'

import * as s from './button.styles'

export interface Props extends React.ComponentPropsWithRef<'button'> {
  ariaLabel?: string
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ ariaLabel, type, onClick, children, ...rest }, ref) => {
    return (
      <s.StyledButton
        {...rest}
        type={type || 'button'}
        ref={ref}
        aria-label={ariaLabel || 'generic button'}
        onClick={onClick}
      >
        {children}
      </s.StyledButton>
    )
  }
)
