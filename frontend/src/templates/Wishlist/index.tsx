import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Grid } from 'components/Grid'
import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Divider } from 'components/Divider'
import Empty from 'components/Empty'

export type WishlistTemplateProps = {
  cursos?: GameCardProps[]
  recommendedCursos: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  cursos = [],
  recommendedCursos,
  recommendedHighlight
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="primary">
        Lista de desejo
      </Heading>

      {cursos.length ? (
        <Grid>
          {cursos?.map((curso, index) => (
            <GameCard key={`wishlist-${index}`} {...curso} />
          ))}
        </Grid>
      ) : (
        <Empty
          title="Lista de desejo vazio"
          description="Cursos adicionado na sua lista de desejo aparecerá aqui"
          hasLink
        />
      )}

      <Divider />
    </Container>
    <Showcase
      title="Você pode gostar destes cursos"
      cursos={recommendedCursos}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
