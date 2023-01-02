import styled from 'styled-components'

export const Tr = styled.tr``

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? 'center' : 'start')};
  word-break: break-all;

  svg {
    width: 18px;
    height: 18px;
  }
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`
