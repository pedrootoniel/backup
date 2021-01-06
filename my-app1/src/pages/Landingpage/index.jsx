import React from 'react'

import { Container, Header, Logo, Button } from './style'
import ImgLogo from '../../assets/logo.png'
import Banner from '../../components/Banner'

function Landingpage({ history }) {
  return (
    <Container>
      <Header>
        <Logo src={ImgLogo} />
        <Button onClick={() => history.push('/signin')}>Entrar</Button>
      </Header>
      <Banner />
    </Container>
  )
}

export default Landingpage