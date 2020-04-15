import styled from 'styled-components/macro'

export const GameSettingWrapper = styled.section`
  grid-area: setting;
  display: block;
`

export const InstructionWrapper = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.font.title};
  font-size: 16px;

  & > p {
    font-family: ${({ theme }) => theme.font.body};
  }
`
