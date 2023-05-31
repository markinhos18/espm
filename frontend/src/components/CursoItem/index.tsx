import { Download } from '@styled-icons/boxicons-solid/Download'
import * as S from './styles'

export type CursoItemProps = {
  img: string
  title: string
  price: string
  downloadLink?: string
}

const CursoItem = ({ img, title, price, downloadLink }: CursoItemProps) => (
  <S.Wrapper>
    <S.CursoContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>
          {title}
          {!!downloadLink && (
            <S.DownloadLink
              href={downloadLink}
              target="_blank"
              aria-label={`Get ${title} here`}
            >
              <Download size={22} />
            </S.DownloadLink>
          )}
        </S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.CursoContent>
  </S.Wrapper>
)

export default CursoItem
