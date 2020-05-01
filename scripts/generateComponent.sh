#!/bin/bash

cd "src/components"

mkdir $1
cd $1

touch $1.stories.jsx

echo "import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import $1 from './$1';

storiesOf('$1', module)
  .add('default view', () => (
    <$1 />
  ));
" >> $1.stories.jsx


touch $1.messages.js

echo "import { defineMessages } from 'react-intl';

export default defineMessages({});
" >> $1.messages.js

touch $1.styles.js

echo "import styled from 'styled-components';

export {};
" >> $1.styles.js

touch index.js
echo "export { default } from './$1';" >> index.js

touch $1.jsx

echo "import React from 'react'
import PropTypes from 'prop-types';
import messages from './$1.messages';
import {} from './$1.styles';

const $1 = () => {
  return (
    <div>
      $1
    </div>
  );
};

$1.propTypes = {};
$1.defaultProps = {};

export default $1;
" >> $1.jsx
