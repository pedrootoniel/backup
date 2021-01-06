import styled, { css } from 'styled-components'

export const Input = styled.input`
  width: 95%;
  margin: 10px 0;
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;

  ${props => props.withError && css`
    border: 1px solid #f00;
    margin-bottom: 2px;
  `};
`

export const Error = styled.p`
  align-self: flex-start;
  padding-left: 10px;
  font-size: 13px;
  color: #F00;
`