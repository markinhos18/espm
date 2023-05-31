// import Base from 'templates/Base'

import Menu from 'components/Menu'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'

import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'
import Footer from 'components/Footer'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}
const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => (
  <>
    <S.SectionTop>
      <Container>
        <Menu />
      </Container>

      <Container>
        <S.SectionBanner>
          <BannerSlider items={banners} />
        </S.SectionBanner>
      </Container>
    </S.SectionTop>

    <S.SectionNews>
      <Showcase title="Novos cursos" cursos={newGames} />
    </S.SectionNews>

    <Showcase
      title="Cursos populares"
      highlight={mostPopularHighlight}
      cursos={mostPopularGames}
    />

    <S.SectionUpcoming>
      <Showcase title="Cursos em breve" cursos={upcommingGames} />

      <Showcase highlight={mostPopularHighlight} cursos={upcommingMoreGames} />
    </S.SectionUpcoming>

    <Showcase
      title="Cursos gratuitos"
      highlight={mostPopularHighlight}
      cursos={freeGames}
    />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </>
)

export default Home
