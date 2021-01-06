import React, { useState } from 'react'
import { Container, Box, Logo, Span, Input, LinkA, Button } from './style'
import ImgLogo from '../../assets/logo.png'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthProvider'

function SignUp({ history }) {
  const { setAuthUser } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const addUser = () => {
    setLoading(true)
    if (!name || !email || !password || !confirmPassword) {
      setLoading(false)
      return alert('Todos os campos são obrigatórios')
    } if (password !== confirmPassword) {
      setLoading(false)
      return alert('As senhas devem ser iguais')
    }

    api.post('/users', { name, email, password, confirmPassword }).then(resp => {
      if (resp.data.success) {
        setLoading(false)
        history.push('/')
        setAuthUser({ authenticated: true, token: resp.data.auth })
        localStorage.setItem('@noteact_token', resp.data.auth)
        return
      }
      alert(resp.data.message)

    }).catch((err) => {
      alert('Erro ao cadastrar usuário')
    })
  }


  return (
    <Container>
      <Box>
        <LinkA linklogo onClick={() => history.push('/')}>
          <Logo src={ImgLogo} />
        </LinkA>
        <Span>Assuma o controle de suas anotações.</Span>
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="Nome" />
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <Input value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" type="password" />
        <Input value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirme a senha" type="password" />
        <Button onClick={addUser} >{loading ? 'Carregando...' : 'Criar'}</Button>
        <LinkA onClick={() => history.push('/signin')}>Fazer login</LinkA>
      </Box>
    </Container>
  )
}

export default SignUp