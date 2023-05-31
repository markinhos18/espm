import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import { GameCardProps } from 'components/GameCard'
import Highlight, { HighlightProps } from 'components/Highlight'

import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  cursos?: GameCardProps[]
}

const Showcase = ({ title, highlight, cursos }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="primary">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!cursos && <GameCardSlider items={cursos} />}
  </S.Wrapper>
)

export default Showcase
