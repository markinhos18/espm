import * as S from './styles'

export type LogoProps = {
  size?: 'small' | 'medium' | 'large'
}

const Logo = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo_espm.png" alt="ESPM" />
  </S.Wrapper>
)

export default Logo
