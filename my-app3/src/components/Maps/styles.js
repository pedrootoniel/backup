import styled from 'styled-components'
import {shade} from 'polished'

export const Container = styled.div`
  display: flex;
  flex: 1;
  background: #000;
  position: relative;

  i {
    display: flex;
    border-radius: 50%;
    margin-top: 10px;
    right: 20px;
    padding: 10px;
    background: #FFF;
    color: #000;
    position: absolute;
    z-index: 10;
    object-fit: cover;
    cursor: pointer;
    transition: 0.2s;

    :hover {
      background: ${shade(0.2, '#fff')}
    }
  }

  @media(max-width:800px) {
      display: flex;
      flex-direction: column;

  i{
    margin-bottom: 20px;
    bottom: 0;
    }
  }
`

export const ImgLogo = styled.img`
  background: #FFF;
  padding: 3px;
  margin: 10px 0 0 50px;
  position: absolute;
  z-index: 10;
  border-radius: 50%;
  object-fit: cover;
  cursor: pointer;

  @media(max-width: 800px) {
    align-self: flex-start;
    margin-left: 50px;
  }
`
export const Img = styled.img`
  width: 240px;
`
export const Title = styled.strong`
  padding: 5px;
`
export const Description = styled.span``

export const PopupInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
`