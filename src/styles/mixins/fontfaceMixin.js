import { css } from 'styled-components';

export const fontfaceMixin = (family, src, weight = 'normal', fontStyle = 'normal') => css`
  @font-face {
    font-family: "${family}";
    font-style: ${fontStyle};
    font-weight: ${weight};
    src:
      url("${src.woff}") format("woff"),
      url("${src.ttf}") format("truetype"),
      url("${src.svg}##{${family}") format("svg");
  }
`;
