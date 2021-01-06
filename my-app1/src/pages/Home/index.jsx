import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import SideBar from '../../components/SideBar'
import Banner from '../../components/Banner'
import { Container, SideMenu, Content } from './style'
import Form from '../../components/Form'
import Profile from '../../components/Profile'
import { useAuth } from '../../hooks/AuthProvider'
import api from '../../services/api'

function Home({ history, match }) {

  const { authUser } = useAuth()
  const [showProfile, setShowProfile] = useState(false)
  const [notes, setNotes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    refreshList()
  }, [])

  const refreshList = () => {
    setLoading(true)
    api.get('/notes', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      if (resp.data.success) {
        setLoading(false)
        return setNotes(resp.data.notes.reverse())
      }
      alert(resp.data.message)
    }).catch((err) => {
      setLoading(false)
      return alert('Não foi possível localizar as notas')
    })
  }

  return (
    <Container>
      <SideMenu>
        <SideBar
          history={history}
          showProfile={showProfile}
          setShowProfile={setShowProfile}
          notes={notes}
          loading={loading}
        />
      </SideMenu>
      <Content>
        <Route path='/' exact component={Banner} />
        <Route path='/add' exact component={(props) => <Form {...props} edit={false} refreshList={refreshList} />} />
        <Route path='/edit/:id' exact component={(props) => <Form {...props} edit refreshList={refreshList} />} />
        {
          showProfile &&
          <Profile match={match} />
        }
      </Content>
    </Container>
  )
}

export default Home