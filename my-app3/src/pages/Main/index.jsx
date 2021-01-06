import React, { useState } from 'react'
import Maps from '../../components/Maps'
import SideMenu from '../../components/SideMenu'

import { Container } from './styles'

function Main() {

  const [showSide, setShowSide] = useState(false)

  return (
    <Container>
      <Maps
        setShowSide={setShowSide}
        showSide={showSide}
      />
      {
        showSide &&
        <SideMenu setShowSide={setShowSide} />
      }
    </Container>
  )
}

export default Main