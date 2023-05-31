import styled, { css, DefaultTheme } from 'styled-components'
import { darken } from 'polished'

import { RibbonProps, RibbonColors } from '.'

const wrapperModifiers = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};
    &::before {
      border-left-color: ${darken(0.2, theme.colors[color])};
      border-top-color: transparent;
      border-right-color: ${darken(0.2, theme.colors[color])};
    }
  `,

  normal: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    height: 3.6rem;
    right: 1rem;
    &::before {
      top: 0;
      right: 11.5rem;
      border-top-width: 2rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    height: 2.6rem;
    right: -1.5rem;
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<RibbonProps>`
  ${({ theme, color, size }) => css`
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0rem;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 0;
    }
    ${!!color && wrapperModifiers.color(theme, color)};
    ${!!size && wrapperModifiers[size](theme)};
  `}
`
