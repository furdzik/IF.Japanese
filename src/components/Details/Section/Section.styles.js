import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { sectionTypes } from '@constants';

import { breakpointMixin } from '@styles/mixins';

const PrimarySection = (props) => css`
  ${breakpointMixin.laptop(css`
    max-width: calc(100% - 30rem);
    padding-right: 4rem;
  `)};

  ${props.wide && css`
    ${breakpointMixin.laptop(css`
      max-width: 100%;
      padding-right: 0;
    `)};
  `};
`;

const SecondarySection = (props) => css`
  flex-shrink: 0;
  width: 100%;
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px dotted ${props.theme.mainColors.secondary};

  ${breakpointMixin.laptop(css`
    width: 30rem;
    margin-top: 0;
    margin-left: auto;
    padding-top: 0;
    padding-left: 4rem;
    border-top: none;
    border-left: 1px dotted ${props.theme.mainColors.secondary};
    border-radius: ${props.theme.layout.borderRadius};
  `)};
`;

const NameSection = (props) => css`
  width: auto;

  ${props.wide && css`
    flex-wrap: wrap;
  `};

  ${breakpointMixin.laptop(css`
    display: flex;
  `)};
`;

const OtherSection = css`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Wrapper = styled.div`
  width: 100%;

  ${(props) => props.type === sectionTypes.PRIMARY && css`
    ${PrimarySection(props)};
  `};
  ${(props) => props.type === sectionTypes.SECONDARY && css`
    ${SecondarySection(props)};
  `};
  ${(props) => props.type === sectionTypes.NAME && css`
    ${NameSection(props)};
  `};
  ${(props) => props.type === sectionTypes.OTHER && css`
    ${OtherSection};
  `};
`;

export {
  Wrapper
};
