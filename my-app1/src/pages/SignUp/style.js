import styled, {css} from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 400px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export const Logo = styled.img`
    padding: 40px;
    width: 230px;
    object-fit: cover;
`

export const Span = styled.span`
    padding: 30px;
`

export const Input = styled.input`
    margin: 5px;
    padding: 10px;
    outline: none;
    width: 325px;
    border: 1px solid #ccc;
`

export const Button = styled.button`
    padding: 10px 30px;
    margin: 10px;
    outline: none;
    border: 0;
    background: var(--color-green);
    color: #FFF;
    cursor: pointer;
    transition: 0.2s;

    :hover{
        background: ${shade(0.2, '#14CC45')}
    }
`

export const LinkA = styled.button`
    font-size: 14px;
    border: 0;
    background: transparent;
    color: var(--color-green);
    outline: none;
    margin: 10px;
    cursor: pointer;

    ${props => props.linklogo && css`
      margin:0;
    `}
`
