import React from 'react'
import { GameSetting } from 'containers/game-setting'
import { Game } from 'containers/game'

import * as s from './app.styles'
import { Button } from 'components/button'

const App = () => {
  return (
    <s.PageLayout>
      <Game />
      <GameSetting />
      <s.Buttonwrapper>
        <Button>Button</Button>
      </s.Buttonwrapper>
    </s.PageLayout>
  )
}

export default App
