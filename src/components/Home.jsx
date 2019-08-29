import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import styles from './Home.styles.scss';

import messages from './Home.messages';

import injectProvider from '../utils/HoC/injectProvider';

const Home = ({
  intl
}) => (
  <div className={styles.applicationHeader}>
    <div className={styles.container}>
      <h1 className={styles.title}>{intl.formatMessage(messages.title)}</h1>
    </div>
  </div>
);

Home.propTypes = {
  intl: PropTypes.object.isRequired
};

export default injectProvider(withRouter(Home));
