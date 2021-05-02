import styled, { css } from 'styled-components';

// @TODO create a new component
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

const ReadingList = styled.ul`
  margin-top: 2rem;
  list-style: none;
`;

const ReadingListItem = styled.li`
  margin-bottom: 2rem;
`;

const StrokeWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: .1rem;
  margin-left: .1rem;
`;

const StrokeBox = styled.div`
  position: relative;
  width: 12.444rem;
  margin-top: -.1rem;
  margin-left: -.1rem;
  border: 1px solid ${(props) => props.theme.colors.secondaryColor};
  &::before,
  &::after {
    position: absolute;
    z-index: 1;
    content: '';
  }
  &::before {
    top: 0;
    left: 50%;
    width: 0;
    height: 100%;
    border-left: 1px dashed ${(props) => props.theme.colors.secondaryColor};
  }
  &::after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    border-top: 1px dashed ${(props) => props.theme.colors.secondaryColor};
  }
`;

const StrokeImage = styled.img`
  display: block;
  position: relative;
  z-index: 2;
  max-width: 100%;
`;

const StrokeNumberWrapper = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.secondaryColor};
  vertical-align: middle;
`;

const ExampleWrapper = styled.div`
  display: block;
`;

export {
  Tag,
  ReadingList,
  ReadingListItem,
  StrokeWrapper,
  StrokeBox,
  StrokeImage,
  StrokeNumberWrapper,
  ExampleWrapper
};
