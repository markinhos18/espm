import Base from 'templates/Base'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import { GameCardProps } from 'components/GameCard'
import TextContent from 'components/TextContent'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type CursoTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcommingCursos: GameCardProps[]
  upcommingHighlight: HighlightProps
  recommendedCursos: GameCardProps[]
}

const Curso = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcommingCursos,
  upcommingHighlight,
  recommendedCursos
}: CursoTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />
    <S.Main>
      <S.SectionCursoInfo>
        <GameInfo {...gameInfo} />
      </S.SectionCursoInfo>
      <S.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </S.SectionGallery>
      <S.SectionDescription>
        <TextContent title="São Paulo" content={description} />
      </S.SectionDescription>
      <S.SectionDetails>
        <GameDetails {...details} />
      </S.SectionDetails>
      <Showcase
        title="Próximos Cursos"
        highlight={upcommingHighlight}
        cursos={upcommingCursos}
      />

      <Showcase title="Cursos relacionados" cursos={recommendedCursos} />
    </S.Main>
  </Base>
)

export default Curso
