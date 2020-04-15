import styled from 'styled-components/macro'

export const ControlWrapper = styled.section`
  grid-area: button;
  padding: 6vh 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 3vh 0;
  }
`
