import Link from 'next/link'
import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined'

import { FormWrapper, FormLink } from 'components/Form'
import Button from 'components/Button'
import TextField from 'components/TextField'

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField
        name="name"
        placeholder="Nome"
        type="name"
        icon={<AccountCircle />}
      />
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
      <TextField
        name="confirm-password"
        placeholder="Confirmar senha"
        type="password"
        icon={<Lock />}
      />

      <Button size="large" fullWidth>
        Entrar agora
      </Button>

      <FormLink>
        Já tem uma conta?{' '}
        <Link href="/sign-in">
          <a>Inscrever-se</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
)

export default FormSignUp