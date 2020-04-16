import styled from 'styled-components/macro'

export const SliderContainer = styled.div`
  display: block;
`

export const SliderWrapper = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const Slider = styled.input`
  flex: 1;
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 10px;
  transition: all 0.3s ease;

  &:hover {
    filter: brightness(90%);
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 30px;
    box-shadow: 0px 0px 3px darkgreen;
    transition: all 0.5s ease;

    &:hover,
    &:active {
      transform: scale(1.05);
    }
  }
`

export const Output = styled.output<{ show: boolean }>`
  display: ${({ show }) => (show ? 'block' : 'none')};
  position: absolute;
  left: calc(50% - 10px);
`

export const Display = styled.span`
  width: 20px;
  text-align: center;
`
