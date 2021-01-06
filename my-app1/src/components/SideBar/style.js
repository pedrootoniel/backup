  import styled, {css} from 'styled-components'
  import {shade} from 'polished'
  
  
export const  Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`

export const  ContainerTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const  User = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
`

export const  ImgUser = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`

export const  NameUser = styled.div`
  padding-left: 10px;
`

export const  Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`

export const  Button = styled.button`
  padding: 5px 15px;
  margin: 10px 0 0 5px;
  border-radius: 5px;
  outline: none;
  background: transparent;
  color: var(--color-green);
  border: 1px solid var(--color-green);
  cursor: pointer;

  ${props => props.addNote && css`
    background: var(--color-green);
    color: #FFF;
    margin: 20px 0;
    border: 0;
    transition: 0.2s;

    :hover {
      background: ${shade(0.2, '#14CC45')};
    }
  `}
`

export const  AllNotes = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  overflow: auto;
`

export const  Span = styled.span`
  padding: 5px 0 5px 15px;
`

export const  Input = styled.input`
  width: 100%;
  padding: 5px;
  outline: none;
  border: 1px solid #ccc;
  margin: 10px 0;
  border-radius: 5px;
`

export const  LinkNote = styled.p`
  background: #ccc;
  border-left: 4px solid var(--color-green);
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  text-decoration: none;
  color: #000;
  transition: 0.2s;
  cursor: pointer;

  :hover {
      background: ${shade(0.2, '#14CC45')};
      color: #FFF;
      border: 0;
    }
`

export const Logo = styled.img`

  bottom: 0;
  width: 200px;
  padding: 20px;
  cursor: pointer;
`