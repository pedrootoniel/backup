import styled from 'styled-components'
import { shade } from 'polished';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
    flex-direction: column;
    height: 100vh;
`

export const ImgTitle = styled.img`
    padding: 20px;
`

export const ImgSub = styled.img`
`

export const Img = styled.img`
    padding: 20px;
`

export const Button = styled.button`
  height:45px;
  border:0;
  background-color: var(--color-green);
  outline: none;
  padding: 10px 40px;
  margin: 10px;
  color: #FFF;
  cursor: pointer;
  transition: 0.2s;

    :hover{
        background: ${shade(0.2, '#14CC45')}
    }
`