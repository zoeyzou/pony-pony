import React, { FC } from 'react'

import * as s from './image.styles'

export type Props = React.ImgHTMLAttributes<HTMLImageElement>

export const Image: FC<Props> = ({ ...rest }) => <s.StyledImage {...rest} />
