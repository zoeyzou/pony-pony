import React, { FC, LabelHTMLAttributes } from 'react'

import * as s from './label.styles'

type Props = LabelHTMLAttributes<HTMLLabelElement>

export const Label: FC<Props> = ({ children, ...rest }) => <s.Label {...rest}>{children}</s.Label>
