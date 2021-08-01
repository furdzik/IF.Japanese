import styled, { css } from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 100%;
  height: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.mainCategoriesStyle.notKnown.background};
`;

const ProgressStyles = css`
  width: ${(props) => props.percent}%;
  height: 100%;
`;

const KnownProgress = styled.div`
  ${ProgressStyles};
  background: ${(props) => props.theme.mainCategoriesStyle.known.background};
`;

const ToRepeatProgress = styled.div`
  ${ProgressStyles};
  border-right: 1px solid #ec4a4a;
  background: ${(props) => props.theme.mainCategoriesStyle.toRepeat.background};
`;

const NowLearningProgress = styled.div`
  ${ProgressStyles};
  border-right: 1px solid #f36a6a;
  background: ${(props) => props.theme.mainCategoriesStyle.nowLearning.background};
`;

const InProgressProgress = styled.div`
  ${ProgressStyles};
  border-right: 1px solid #e0acac;
  background: ${(props) => props.theme.mainCategoriesStyle.inProgress.background};
`;

export {
  Wrapper,
  KnownProgress,
  ToRepeatProgress,
  NowLearningProgress,
  InProgressProgress
};
