import React from 'react';
import { useIntl } from 'react-intl';

import styles from './Home.styles.scss';

import messages from './Home.messages';

const Home = () => {
  const intl = useIntl();

  return (
    <div className={styles.home}>
      <h1 className={styles.title}>{intl.formatMessage(messages.title)}</h1>
    </div>
  )
};

export default Home;
