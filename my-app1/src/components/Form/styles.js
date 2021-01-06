import styled, { css } from 'styled-components'
import { shade } from 'polished'

export const Container = styled.div`
 padding: 20px;
 height: 100%;
 display: flex;
 flex-direction: column;
 overflow: auto;
`

export const ContainerTitle = styled.div`
  display: flex;
  align-items: center;
  padding: 40px 0 40px 0;
`

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
`

export const Button = styled.button`
  padding: 10px 40px;
  margin-left: 10px;
  outline: none;
  border: 0;
  border-radius: 5px;
  background: var(--color-green);
  color: #FFF;

  ${props => props.delete && css`
    background: #ccc;

    :hover {
      background: #ccc;
    }
  `}

  :hover {
    background: ${shade(0.2, '#14CC45')}
  }
`

export const EditMd = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`