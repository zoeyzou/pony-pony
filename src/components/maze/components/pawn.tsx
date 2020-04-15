import React, { FC } from 'react'
import { Image } from 'components/image'
import pony from 'assets/img/pony.png'
import domokun from 'assets/img/domokun.png'
import exit from 'assets/img/exit.png'

interface Props {
  type: 'pony' | 'exit' | 'domokun'
}

export const Pawn: FC<Props> = ({ type }) => {
  switch (type) {
    case 'pony':
      return <Image src={pony} />
    case 'domokun':
      return <Image src={domokun} />
    case 'exit':
      return <Image src={exit} />
    default:
      return null
  }
}
