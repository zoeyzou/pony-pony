import React from 'react'

import { Image } from '.'

export default {
  title: 'Components/Image',
  component: Image,
}

const defaultProps: React.ComponentProps<typeof Image> = {
  src: 'https://www.pngmart.com/files/3/My-Little-Pony-Transparent-PNG.png',
}

export const Default = () => (
  <div style={{ width: '300px' }}>
    <Image {...defaultProps} width="100%" />
  </div>
)
