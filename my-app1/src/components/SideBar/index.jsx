import React, { useState, useEffect } from 'react'
import {
  Container,
  ContainerTop,
  User,
  ImgUser,
  NameUser,
  Buttons,
  Button,
  AllNotes,
  Span,
  Input,
  LinkNote,
  Logo
} from './style'
import api from '../../services/api'
import ImageLogo from '../../assets/logo.png'
import { useAuth } from '../../hooks/AuthProvider'

function SideBar({ showProfile, setShowProfile, history, notes, loading }) {

  const { authUser, setAuthUser } = useAuth()

  const [name, setName] = useState('')
  const [file, setFile] = useState('')
  const [search, setSearch] = useState('')
  const [notesFilter, setNotesFilter] = useState([])

  useEffect(() => {
    api.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      setName(resp.data.user.name)
      setFile(resp.data.user.image)
    })
  }, [])

  useEffect(() => {
    if (!!search) {
      const filters = notes.filter(({ title }) => {
        const titleLower = title.toLowerCase();
        const searchLower = search.toLowerCase();
        return titleLower.indexOf(searchLower) > -1;
      });
      return setNotesFilter(filters);
    }
    setNotesFilter([]);
  }, [search])

  return (
    <Container>
      <ContainerTop>
        <User>
          <ImgUser src={file} />
          <NameUser>{name}</NameUser>
        </User>
        <Buttons>
          <Button onClick={() => setShowProfile(!showProfile)}>Meus dados</Button>
          <Button onClick={() => {
            localStorage.removeItem('@noteact_token')
            setAuthUser({ authenticated: false })
          }}>Sair</Button>
        </Buttons>
        <hr />
      </ContainerTop>
      <Button addNote onClick={() => history.push('/add')}>Adicionar nota</Button>

      <Span>Todas as Notas</Span>
      <hr />
      <Input placeholder="Pesquisar" value={search} onChange={e => setSearch(e.target.value)} />

      <AllNotes>
        {
          loading && 'Carregando...'
        }
        {
          (!loading && !search && !!notes.length) &&
          notes.map(note => (
            <LinkNote key={note.id} onClick={() => history.push('/edit/' + note.id)}>{note.title}</LinkNote>
          ))
        }
        {
          (!loading && !search && !notes.length) &&
          'Lista vazia'
        }
        {
          (!loading && !!search && !!notesFilter.length) &&
          notesFilter.map(note => (
            <LinkNote key={note.id} onClick={() => history.push('/edit/' + note.id)}>{note.title}</LinkNote>
          ))
        }
        {
          (!loading && !!search && !notesFilter.length) &&
          'Não encontrado'
        }
      </AllNotes>

      <Logo onClick={() => history.push('/')} src={ImageLogo} />
    </Container>
  )
}

export default SideBar