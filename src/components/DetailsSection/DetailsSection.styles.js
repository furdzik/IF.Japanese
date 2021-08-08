import styled, { css } from 'styled-components';

import { sectionTypes } from '@config/constants';

import { breakpointMixin } from '@styles/mixins';

const PrimarySection = css`
  ${breakpointMixin.laptop`
    max-width: calc(100% - 30rem);
    padding-right: 4rem;
  `};
  ${(props) => props.wide && css`
    ${breakpointMixin.laptop`
      max-width: 100%;
      padding-right: 0;
    `};
  `};
`;

const SecondarySection = css`
  flex-shrink: 0;
  width: 100%;
  margin-top: 4rem;
  padding-top: 4rem;
  border-top: 1px dotted ${(props) => props.theme.mainColors.secondary};

  ${breakpointMixin.laptop`
    width: 30rem;
    margin-top: 0;
    margin-left: auto;
    padding-top: 0;
    padding-left: 4rem;
    border-top: none;
    border-left: 1px dotted ${(props) => props.theme.mainColors.secondary};
    border-radius: ${(props) => props.theme.layout.borderRadius};
  `};
`;

const NameSection = css`
  ${breakpointMixin.laptop`
    display: flex;
    flex-wrap: wrap;
  `};
`;

const OtherSection = css`
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

const Wrapper = styled.div`
  ${(props) => props.type === sectionTypes.PRIMARY && css`
    ${PrimarySection};
  `};
  ${(props) => props.type === sectionTypes.SECONDARY && css`
    ${SecondarySection};
  `};
  ${(props) => props.type === sectionTypes.NAME && css`
    ${NameSection};
  `};
  ${(props) => props.type === sectionTypes.OTHER && css`
    ${OtherSection};
  `};
`;

export {
  Wrapper
};
