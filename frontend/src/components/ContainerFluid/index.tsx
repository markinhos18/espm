import styled, { css } from 'styled-components'

export const ContainerFluid = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.containerfluid};
    margin-left: auto;
    margin-right: auto;
    padding-left: calc(${theme.grid.gutterfluid} / 2);
    padding-right: calc(${theme.grid.gutterfluid} / 2);
  `}
`
