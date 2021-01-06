import styled, {css} from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  align-items: center;
  z-index: 2;
  top: 0;
  position: absolute;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 20px;
  background: #FFF;
`
export const Span = styled.span`
  padding: 20px;
  font-size: 24px;

  ${props => props.info && css`
    font-size: 14px;
    color: #999;
    padding: 10px;
  `}
`

export const ImgProfile = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`

export const Input = styled.input`
  width: 100%;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-top: 5px;
  outline: none;
`

export const Button = styled.button`
  padding: 5px 20px;
  margin-top: 10px;
  border: 0;
  border-radius: 5px;
  color: #FFF;
  background: var(--color-green);
  outline: none;

  :hover {
    background: ${shade(0.2, '#14CC45')}
  }
`