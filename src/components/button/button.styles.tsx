import styled from 'styled-components/macro'

import { Props } from './index'

export const StyledButton = styled.button<Props>`
  width: 100%;
  appearance: none;
  background: none;
  font-family: ${({ theme }) => theme.font.body};
  font-size: 32px;
  font-weight: bolder;
  padding-left: 12px;
  padding-right: 12px;
  outline: none;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 2px;
  transition: all 0.15s;

  &:hover,
  &:focus {
    border: 2px solid rgba(112, 76, 182, 0.4);
  }

  &:active {
    background-color: rgba(112, 76, 182, 0.2);
  }

  &[disabled] {
    cursor: not-allowed;
    color: rgba(112, 76, 182, 0.4);

    &:hover,
    &:focus {
      border: 2px solid transparent;
      color: rgba(112, 76, 182, 0.4);
    }
  }
`
