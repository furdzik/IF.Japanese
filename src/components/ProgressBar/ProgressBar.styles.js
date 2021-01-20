import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  overflow: hidden;
  max-width: 100%;
  height: 1.5rem;
  margin-top: 3rem;
  margin-bottom: 2rem;
  border-radius: ${(props) => props.theme.layout.borderRadius};
  background: ${(props) => props.theme.colors.secondaryColor};
`;

const KnownProgress = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  background: ${(props) => props.theme.colors.primaryColor};
`;

const InProgressProgress = styled.div`
  width: ${(props) => props.percent}%;
  height: 100%;
  background: repeating-linear-gradient(45deg, #ef8888, #fba5a5 2px, ${(props) => props.theme.colors.tartaryColor} 4px, ${(props) => props.theme.colors.tartaryColor} 6px);
`;

export {
  Wrapper,
  KnownProgress,
  InProgressProgress
};
