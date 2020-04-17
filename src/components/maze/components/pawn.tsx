import React, { FC, useState, useEffect } from 'react'
import { Image } from 'components/image'
import { Pony } from 'types/pony'

interface Props {
  type: Pony | 'exit' | 'domokun'
}

export const Pawn: FC<Props> = ({ type }) => {
  const [src, setSrc] = useState('')
  const [srcReady, setSrcReady] = useState(false)

  useEffect(() => {
    if (src) {
      setSrcReady(true)
    }
  }, [src])

  const changeSrc = (img: typeof import('*.png')) => setSrc(img.default)

  switch (type) {
    case Pony.applejack:
      import('assets/img/applejack.png').then(changeSrc)
      break
    case Pony.fluttershy:
      import('assets/img/fluttershy.png').then(changeSrc)
      break
    case Pony.pinkiePie:
      import('assets/img/pinkie-pie.png').then(changeSrc)
      break
    case Pony.rainbowDash:
      import('assets/img/rainbow-dash.png').then(changeSrc)
      break
    case Pony.rarity:
      import('assets/img/rarity.png').then(changeSrc)
      break
    case Pony.spike:
      import('assets/img/spike.png').then(changeSrc)
      break
    case Pony.twilightSparkle:
      import('assets/img/twilight-sparkle.png').then(changeSrc)
      break
    case 'domokun':
      import('assets/img/domokun.png').then(changeSrc)
      break
    case 'exit':
      import('assets/img/exit.png').then(changeSrc)
      break
    default:
      return null
  }
  if (!srcReady) {
    return null
  }
  return <Image src={src} alt={type} />
}
