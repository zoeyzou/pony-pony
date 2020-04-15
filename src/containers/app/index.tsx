import React from 'react'
import { GameSetting } from 'containers/game-setting'
import { Game } from 'containers/game'
import { Control } from 'containers/control'

import * as s from './app.styles'

const App = () => {
  return (
    <s.PageLayout>
      <Game />
      <GameSetting />
      <Control />
    </s.PageLayout>
  )
}

export default App
