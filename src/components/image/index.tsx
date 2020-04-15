import React, { FC } from 'react'

import * as s from './image.styles'

export type Props = React.ImgHTMLAttributes<HTMLImageElement>

export const Image: FC<Props> = ({ alt, ...rest }) => (
  <s.StyledImage {...rest} alt={alt || 'image'} />
)
