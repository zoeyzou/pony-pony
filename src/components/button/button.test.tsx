import React from 'react'
import { cleanup, render } from '@testing-library/react'
import { axe } from 'jest-axe'
import userEvent from '@testing-library/user-event'

import { Button } from '.'

afterEach(cleanup)

const defaultProps: React.ComponentProps<typeof Button> = {
  ariaLabel: 'test-button',
}

describe('Button', () => {
  it('passes accessibility test', async () => {
    const { container } = render(<Button {...defaultProps}>test</Button>)
    const result = await axe(container)
    expect(result).toHaveNoViolations()
  })

  it('renders a button correctly', () => {
    const clickHandler = jest.fn()
    const { getByRole, getByText } = render(
      <Button {...defaultProps} onClick={clickHandler}>
        test
      </Button>
    )
    const button = getByRole('button')

    expect(getByText('test')).toBeInTheDocument()

    userEvent.click(button)
    expect(clickHandler).toHaveBeenCalled()
  })
})
