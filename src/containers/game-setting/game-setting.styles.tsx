import styled from 'styled-components/macro'

export const GameSettingWrapper = styled.section`
  grid-area: setting;
  padding: 1vh 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    overflow: scroll;
  }
`

export const InstructionWrapper = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 16px;
  overflow: scroll;

  & > p {
    font-family: ${({ theme }) => theme.fonts.body};
  }
`
