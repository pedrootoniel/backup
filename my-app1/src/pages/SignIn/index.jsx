import React, { useState } from 'react'
import { Container, Box, Logo, Span, Input, LinkA, Button } from './style'
import ImgLogo from '../../assets/logo.png'
import api from '../../services/api'
import { useAuth } from '../../hooks/AuthProvider'

function SignIn({ history }) {
  const { setAuthUser } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const submitLogin = () => {
    setLoading(true)
    api.post('/sessions', { email, password }).then(resp => {
      setLoading(false)
      if (resp.data.success) {
        history.push('/')
        setAuthUser({ authenticated: true, token: resp.data.auth })
        localStorage.setItem('@noteact_token', resp.data.auth)
        return
      }
      alert(resp.data.message)
    }).catch((err) => {
      setLoading(false)
      return alert('Erro ao entrar no sistema')
    })
  }
  return (
    <Container>
      <Box>
        <LinkA linklogo onClick={() => history.push('/')}>
          <Logo src={ImgLogo} />
        </LinkA>
        <Span>Lembre-se de tudo que importa.</Span>
        <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
        <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Senha" />
        <Button onClick={submitLogin}>{loading ? 'Carregando...' : 'Entrar'}</Button>
        <LinkA onClick={() => history.push('/signup')}>Criar Conta</LinkA>
      </Box>
    </Container>
  )
}

export default SignIn