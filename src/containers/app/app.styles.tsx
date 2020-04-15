import styled from 'styled-components/macro'

export const PageLayout = styled.main`
  background-color: ${({ theme }) => theme.colors.light['shade-100']};
  opacity: 0.9;
  border-radius: 5px;
  height: calc(100vh - 8vh - 8vh);
  margin: 8vh 10vw;
  padding: 2vh 4vw;
  display: grid;
  grid-template-areas:
    'game setting'
    'game button';
  grid-template-columns: 2fr 1fr;
  grid-gap: 5vw;

  > * {
    display: grid;
    grid-gap: 2.5vw;
    align-content: center;
  }
`

export const Buttonwrapper = styled.section`
  grid-area: button;
`
