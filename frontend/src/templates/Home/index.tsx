import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import { ContainerFluid } from 'components/ContainerFluid'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import Menu from 'components/Menu'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/BannerSlider'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighligth: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighligth: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighligth,
  upcommingMoreGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <section>
    <ContainerFluid>
      <Menu />
    </ContainerFluid>
    <S.SectionBanner>
      <BannerSlider items={banners} />
    </S.SectionBanner>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="primary">
          Lançamentos
        </Heading>

        <GameCardSlider items={newGames} color="black" />
      </Container>
    </S.SectionNews>
    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="primary">
          Cursos populares
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </S.SectionMostPopular>
    </Container>

    <S.SectionUpcoming>
      <Container>
        <Heading lineLeft lineColor="primary">
          Em breve
        </Heading>
        <GameCardSlider items={upcommingGames} color="black" />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} color="black" />
      </Container>
    </S.SectionUpcoming>

    <Container>
      <S.SectionFreeGames>
        <Heading lineLeft lineColor="primary">
          Cursos gratuitos
        </Heading>
        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>

    <S.SectionFooter>
      <ContainerFluid>
        <Footer />
      </ContainerFluid>
    </S.SectionFooter>
  </section>
)
export default Home
