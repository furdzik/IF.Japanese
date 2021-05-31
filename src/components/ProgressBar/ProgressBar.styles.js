import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 100%;
  height: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainCategoriesStyle.notKnown};
`;

const KnownProgress = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  background: ${(props) => props.theme.mainCategoriesStyle.known};
`;

const InProgressProgress = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  background: ${(props) => props.theme.mainCategoriesStyle.inProgress};
`;

const NowLearningProgress = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  background: ${(props) => props.theme.mainCategoriesStyle.nowLearning.background};
`;

export {
  Wrapper,
  KnownProgress,
  InProgressProgress,
  NowLearningProgress
};
