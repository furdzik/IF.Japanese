import React from 'react';

import { othersMenu } from '@constants';

import ColoredBoxList from '@components/ui/ColoredBoxList';

const OthersMainPage = () => (
  <ColoredBoxList list={othersMenu} />
);

export default OthersMainPage;
