import styled from '@emotion/styled';
import { css } from '@emotion/react';

const AnchorWrapper = styled.span`
  cursor: pointer;

  &:focus {
    outline: -webkit-focus-ring-color auto .5rem;
  }

  ${(props) => props.disabled && css`
    cursor: not-allowed;
  `};

  ${(props) => props.linkType !== 'button' && props.linkType !== 'buttonLink' && css`
    display: inline-flex;
  `};

  ${(props) => (props.linkType === 'button' || props.linkType === 'buttonLink') && css`
    a {
      display: block;
      width: 100%;
      text-align: center;
       &:hover {
        text-decoration: none;
      }
    }
  `};

  ${(props) => props.linkType === 'button' && css`
    a, a:hover {
      color: ${props.theme.monoColors.white};
    }
    ${props.disabled && css`
      pointer-events: none;
      cursor: not-allowed;
      a {
        color: ${props.theme.colors.primary};
      }
    `};
  `};

  ${(props) => props.linkType === 'buttonLink' && css`
    background: transparent;
    flex: 0 0 auto;
    width: auto;
    height: auto;
    border: 0;
    &:hover {
      text-decoration: underline;
    }
  `};
`;

export {
  AnchorWrapper
};
