import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';

ReactDOM.createPortal = node => node;
React.useLayoutEffect = React.useEffect;

jest.mock('styles/breakpoint.mixin', () => ({
  portraitPhone: () => true,
  landscapePhone: () => true,
  phablet: () => true,
  portraitTablet: () => true,
  landscapeTablet: () => true,
  laptop: () => true,
  desktop: () => true,
  hdDesktop: () => true,
  fhdDesktop: () => true,
}));

configure({ adapter: new Adapter() });
