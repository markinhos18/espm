/* eslint-disable @next/next/no-img-element */
import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Button from 'components/Button'
import * as S from './styles'

export type GameCardProps = {
  title: string
  author: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  title,
  author,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small'
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>
    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Author>{author}</S.Author>
      </S.Info>

      <S.FavButton>
        {favorite ? (
          <Favorite aria-label="Remover da lista de desejo" />
        ) : (
          <FavoriteBorder aria-label="Adicione a lista de desejo" />
        )}
      </S.FavButton>
      <S.BuyBox>
        {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
        <S.Price>{promotionalPrice || price}</S.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
