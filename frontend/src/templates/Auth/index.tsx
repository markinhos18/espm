import Link from 'next/link'
import Heading from 'components/Heading'
import { Logo } from 'components/Logo/styles'
import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo src="/img/logo_espm.png" alt="ESPM" />
          </a>
        </Link>
        <div>
          <Heading size="huge" color="white">
            INUSITUDE
          </Heading>
          <S.Subtitle>Ser transformador é praticar o inusitado</S.Subtitle>
        </div>
        <S.BannerFooter>
          ESPM 2022 © Todos os Direitos Reservados
        </S.BannerFooter>
      </S.BannerContent>
    </S.BannerBlock>
    <S.Content>
      <Link href="/">
        <a>
          <Logo src="/img/logo_espm.png" alt="ESPM" />
        </a>
      </Link>
      <Heading color="black" lineColor="primary" lineLeft>
        {title}
      </Heading>
      {children}
    </S.Content>
  </S.Wrapper>
)

export default Auth
