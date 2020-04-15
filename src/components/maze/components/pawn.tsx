import React, { FC } from 'react'
import { Image } from 'components/image'

interface Props {
  type: 'pony' | 'exit' | 'domokun'
}

export const Pawn: FC<Props> = ({ type }) => {
  switch (type) {
    case 'pony':
      return <Image src={`${process.env.PUBLIC_URL}/img/pony.png`} />
    case 'domokun':
      return <Image src={`${process.env.PUBLIC_URL}/img/domokun.png`} />
    case 'exit':
      return <Image src={`${process.env.PUBLIC_URL}/img/exit.png`} />
    default:
      return null
  }
}
