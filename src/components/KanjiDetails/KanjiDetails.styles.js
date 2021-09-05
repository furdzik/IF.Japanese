import styled from 'styled-components';

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
  border: 1px solid ${(props) => props.theme.mainColors.secondary};
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
    border-left: 1px dashed ${(props) => props.theme.mainColors.secondary};
  }
  &::after {
    top: 50%;
    left: 0;
    width: 100%;
    height: 0;
    border-top: 1px dashed ${(props) => props.theme.mainColors.secondary};
  }
`;

const StrokeImage = styled.img`
  position: relative;
  z-index: 2;
  display: block;
  max-width: 100%;
`;

const StrokeNumberWrapper = styled.div`
  margin-bottom: 2rem;
`;

const StrokeNumber = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.lightGray};
  vertical-align: middle;
`;

const ExampleWrapper = styled.div`
  display: block;
`;

const MoreExamplesLink = styled.a`
  display: inline-block;
  margin-top: 1rem;
  color: ${(props) => props.theme.mainColors.primary};

  &:hover {
    text-decoration: underline;
  }
`;

export {
  ReadingList,
  ReadingListItem,
  StrokeWrapper,
  StrokeBox,
  StrokeImage,
  StrokeNumberWrapper,
  StrokeNumber,
  ExampleWrapper,
  MoreExamplesLink
};
