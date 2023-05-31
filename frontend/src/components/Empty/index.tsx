import Button from 'components/Button'
import Link from 'next/link'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/course_not_found.svg"
      alt="course not found"
      role="image"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Voltar</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default Empty
