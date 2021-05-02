import styled, { css } from 'styled-components';

const DetailsWrapper = styled.div`
  overflow: hidden;
`;

const WordHeader = styled.div`
  display: flex;
  margin-bottom: 3rem;
  padding: 1.6rem 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};
  font-size: 2rem;
  font-weight: bold;

  ${(props) => props.known && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.inProgress && css`
    background: repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${props.theme.colors.tartaryColor} 4px, ${props.theme.colors.tartaryColor} 6px);
    color: ${props.theme.colors.white};
    text-shadow: -1px 1px 8px #750101;
  `}
`;

const WordHeaderSeparator = styled.span`
  display: inline-block;
  margin: 0 2rem;
`;

const JishoLink = styled.a`
  display: inline-block;
  margin-left: auto;
  font-weight: 200;
  color: ${(props) => props.theme.colors.white};

  ${(props) => props.notKnow && css`
    color: ${props.theme.colors.black};
  `}
`;

const TagsWrapper = styled.div`
  display: flex;
  margin-bottom: 4rem;
`;

const Tag = styled.span`
  display: inline-block;
  padding: .3rem 1rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.lightGray};
  & + & {
    margin-left: 2rem;
  }
  ${(props) => props.verb && css`
    background: ${props.theme.colors.primaryColor};
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isCommon && css`
    background: #64ad5b;
    color: ${props.theme.colors.white};
  `}
  ${(props) => props.isJlpt && css`
    background: #7d88a7;
    color: ${props.theme.colors.white};
  `}
`;

const Content = styled.div`
  margin: 0 3rem;
`;

const SectionWrapper = styled.div`
  margin-top: 4rem;
  margin-bottom: 4rem;

  ${(props) => props.flex && css`
    display: flex;
  `}
`;

const Header = styled.h2`
  margin-bottom: 2rem;
  ${(props) => !props.smallMargin && css`
    margin-bottom: 4rem;
  `}
`;

const NameWrapper = styled.div`
  height: 100%;
  margin-top: 1rem;
  margin-right: 4rem;
`;

const CharacterWrapper = styled.div`
  width: 20rem;
  margin-bottom: 2rem;
  padding: 4rem 0;
  border: 1px solid ${(props) => props.theme.colors.secondaryColor};
  border-radius: ${(props) => props.theme.layout.borderRadius};
  font-size: 4rem;
  text-align: center;
`;

export {
  DetailsWrapper,
  WordHeader,
  WordHeaderSeparator,
  JishoLink,
  TagsWrapper,
  Tag,
  Content,
  SectionWrapper,
  NameWrapper,
  CharacterWrapper,
  Header
};
