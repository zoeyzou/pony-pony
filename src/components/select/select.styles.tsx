import styled from 'styled-components/macro'

export const SelectWrapper = styled.div`
  position: relative;
  display: block;
  > * {
    font-family: ${({ theme }) => theme.fonts.body};
    color: ${({ theme }) => theme.colors.dark['shade-100']};
  }
`

export const Select = styled.select`
  cursor: pointer;
  appearance: none;
  width: 100%;
  max-width: 100%;
  padding: 4px 8px;
  margin: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.1);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  filter: opacity(90%);
  transition: all 0.2s ease-in;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    transition: all 0.2s ease-in;
    filter: opacity(100%);
  }
`

export const Option = styled.option`
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.light['shade-100']};
  font-size: 12px;
  font-weight: normal;
`

export const Arrow = styled.span`
  cursor: pointer;
  position: absolute;
  font-size: 16px;
  right: 10px;
  bottom: 8px;
  transform: rotate(90deg) scaleY(1.5);
`
