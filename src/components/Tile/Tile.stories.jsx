import React from 'react';

import Tile from './Tile';

export default {
  title: 'Tile',
  component: Tile
};

const Template = (args) => (<Tile {...args}>Tile content</Tile>);

export const Default = Template.bind({});
Default.storyName = 'Default';
Default.args = {
  inProgress: true,
  known: false,
  nowLearning: false,
  level: 2
};
