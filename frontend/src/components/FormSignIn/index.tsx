import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'


import * as S from './styles'


const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Senha"
        type="password"
        icon={<Lock />}
      />
      <S.ForgotPassword href="#">Esqueceu sua senha?</S.ForgotPassword>

      <Button size="large" fullWidth>
        Entrar agora
      </Button>

      <FormLink>
        Não tem uma conta?{' '}
        <Link href="/sign-up">
          <a>Inscrever-se</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignIn