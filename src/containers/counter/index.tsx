import React, { useState, FC } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, incrementAsync } from 'stores/counter/slice'
import { selectCount } from 'stores/counter/selectors'
import { Button } from 'components/button'
import * as s from './counter.styles'

export const Counter: FC = () => {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2')

  return (
    <div>
      <s.Row>
        <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
          +
        </Button>
        <s.Value>{count}</s.Value>
        <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          -
        </Button>
      </s.Row>
      <s.Row>
        <s.TextBox
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />

        <Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </Button>
        <s.AsyncButton onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          {' '}
          Add Async
        </s.AsyncButton>
      </s.Row>
    </div>
  )
}
