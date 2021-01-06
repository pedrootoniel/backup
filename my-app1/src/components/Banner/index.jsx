import React from 'react'
import { withRouter } from 'react-router-dom'

import { Container, ImgTitle, ImgSub, Img, Button } from './style'
import ImageTitle from '../../assets/title.png'
import ImageSub from '../../assets/sub.png'
import Image from '../../assets/img.png'
import { useAuth } from '../../hooks/AuthProvider'

function Banner({ history }) {

  const { authUser: { authenticated } } = useAuth()

  return (
    <Container>
      <ImgTitle src={ImageTitle} />
      <ImgSub src={ImageSub} />
      {
        !authenticated &&
        <Button onClick={() => history.push('/signup')}>Cadastre-se</Button>
      }
      <Img src={Image} />
    </Container>
  )
}

export default withRouter(Banner)