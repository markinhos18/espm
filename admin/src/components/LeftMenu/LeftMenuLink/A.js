import styled, { css } from "styled-components";

const A = styled.a`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    padding-top: 1rem;
    padding-bottom: 0.2rem;
    padding-left: 1.6rem;
    min-height: 3.6rem;
    line-height: 1.8rem;
    border-left: 0.3rem solid transparent;
    cursor: pointer;
    color: ${theme.main.colors.espm["white"]};
    text-decoration: none;
    -webkit-font-smoothing: antialiased;

    &:hover {
      color: ${theme.main.colors.white};
      background: ${theme.main.colors.leftMenu["link-hover"]};
      border-left: 0.3rem solid ${theme.main.colors.espm.white};
      text-decoration: none;
    }

    &:focus {
      color: ${theme.main.colors.espm.white};
      text-decoration: none;
    }

    &:visited {
      color: ${theme.main.colors.espm.white};
    }

    &.linkActive {
      color: white !important;
      border-left: 0.3rem solid ${theme.main.colors.espm.white};
    }
  `}
`;

export default A;
