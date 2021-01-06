import styled from 'styled-components'
import { Form } from '@unform/web';

export const Container = styled.div`
  width: 300px;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media(max-width:800px){
    flex: 1;
    position: absolute;
    z-index: 15;
    height: 100vh;
    width: 100vw;
  }
`

export const Icon = styled.div`
  display: flex;
  position: absolute;
  z-index: 20;
  top: 0;
  align-self: flex-end;
  color: #999;
  padding: 20px;
  cursor: pointer;
`

export const FormUnform = styled(Form)`
  width: 300px;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Span = styled.span`
  font-size: 20px;
  padding: 20px;
`

export const Input = styled.input`
  width: 95%;
  margin: 10px 0;
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const TextArea = styled.textarea`
  width: 95%;
  height: 100px;
  margin: 10px 0;
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
`

export const Button = styled.button`
  padding: 10px 20px;
  background: #000;
  color: #FFF;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.2s;
  margin-top: 10px;
  outline: none;

  :hover {
    background: #999;
  }
`