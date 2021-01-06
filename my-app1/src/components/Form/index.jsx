import React, { useState, useEffect, Fragment } from "react"
import MDEditor from '@uiw/react-md-editor'
import { Container, ContainerTitle, Input, Button, EditMd } from './styles'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthProvider'

export default function Form({ edit, refreshList, match }) {

  const { authUser } = useAuth()

  const [content, setContent] = useState("")
  const [title, setTitle] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (edit) {
      // match.params.id
      api.get(`/notes/${match.params.id}`,
        { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
          if (resp.data.success) {
            setTitle(resp.data.note.title)
            setContent(resp.data.note.content)
          }
        })
    }
  }, [match.params.id])

  const submitNote = () => {
    setLoading(true)
    api.post('/notes', { title, content },
      { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
        setLoading(false)
        refreshList()
        return alert('Nota adicionada')
      }).catch((err) => {
        setLoading(false)
        return alert('Não foi possível salvar a nota!')
      })
  }

  const editNote = () => {
    setLoading(true)
    api.put('/notes', { title, content, noteId :  match.params.id},
      { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
        setLoading(false)
        refreshList()
        return alert('Nota atualizada')
      }).catch((err) => {
        setLoading(false)
        return alert('Não foi possível salvar a nota!')
      })
  }

  const removeNote = () => {
    setLoading(true)
    api.delete(`/notes/${match.params.id}`, { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      setLoading(false)
      refreshList()
      return alert('Nota excluída!')
    })
  }

  return (
    <Container>
      <ContainerTitle>
        <Input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Título da nota"
        />
        {
          edit &&
          <Button onClick={removeNote} delete>Excluir</Button>
        }
        <Button onClick={edit ? editNote : submitNote}> {loading ? 'Salvando' : 'Salvar'}</Button>
      </ContainerTitle>
      <EditMd>
        <MDEditor
          value={content}
          onChange={setContent}
          height={window.innerHeight / 1.4}
          maxHeight={window.innerHeight / 1.4}
        />
      </EditMd>
    </Container>
  )
}