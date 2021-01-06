import React, { useState, useRef, useEffect } from 'react'
import {
  Container,
  Span,
  ImgProfile,
  Input,
  Button
} from './style'
import ImageUser from '../../assets/user.png'
import { MdAddAPhoto } from 'react-icons/md'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { useAuth } from '../../hooks/AuthProvider'
import api from '../../services/api'

function Profile({ match }) {

  const { authUser } = useAuth()
  const inputFile = useRef(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [file, setFile] = useState('')
  const [removePhoto, setRemovePhoto] = useState(false)
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confNewPass, setConfNewPass] = useState('')

  useEffect(() => {
    api.get('/users', { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      setName(resp.data.user.name)
      setEmail(resp.data.user.email)
      setFile(resp.data.user.image)
    })
  }, [match.params.id])

  const submitSave = () => {
    if (!name || !email) {
      return alert('Os campos de Nome e Email não podem ser vazios')
    }
    if ((currentPassword || newPassword || confNewPass) && (!currentPassword || !newPassword || !confNewPass)) {
      return alert('Todos os campos de validação de senha devem ser preenchidos')
    }

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)

    if (file) {
      formData.append('file', inputFile.current.files[0])
    }
    if (removePhoto) {
      formData.append('removePhoto', removePhoto)
    }
    if (currentPassword || newPassword || confNewPass) {
      formData.append('currentPassword', currentPassword)
      formData.append('newPassword', newPassword)
    }
    api.put(`/users`, formData, 
    { headers: { Authorization: `Bearer ${authUser.token} ` } }).then(resp => {
      return alert('Dados alterados com sucesso!')
    })
  }


  return (
    <Container>
      <Span>Meus dados</Span>
      <AiOutlineCloseCircle
        size={20}
        value={removePhoto}
        onClick={e => {
          setFile(null)
          setRemovePhoto(true)
        }}
        style={{
          marginRight: '100',
          borderRadius: '50%',
          cursor: 'pointer'
        }} />
      <ImgProfile src={file || ImageUser} alt="Foto de perfil" />
      <Input
        type="file"
        ref={inputFile}
        accept='image/png, image/jpeg'
        style={{ display: 'none' }}
        onChange={e => {
          const linkImage = URL.createObjectURL(inputFile.current.files[0])
          setFile(linkImage)
        }}
      />
      <MdAddAPhoto
        size={20}
        onClick={() => inputFile.current.click()}
        style={{
          marginLeft: '100',
          color: 'var(--color-comments)', cursor: 'pointer'
        }} />
      <Input
        placeholder="Nome"
        value={name}
        onChange={e => setName(e.target.value)} />
      <Input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)} />
      <Span info>Altere os dados abaixo somente para realizar alteração de senha</Span>
      <Input
        placeholder="Senha atual"
        type="password"
        value={currentPassword}
        onChange={e => setCurrentPassword(e.target.value)} />
      <Input
        placeholder="Nova senha"
        type="password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)} />
      <Input
        placeholder="Confirme a nova senha"
        type="password"
        value={confNewPass}
        onChange={e => setConfNewPass(e.target.value)} />
      <Button onClick={submitSave}>Salvar</Button>
    </Container>
  )
}

export default Profile