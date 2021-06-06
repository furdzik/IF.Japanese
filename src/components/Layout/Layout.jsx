import React from 'react';
import PropTypes from 'prop-types';

import { objectShape } from '@utils/types/objectShape';

import Container from '@components/ui/Container';

import Menu from '@components/Menu';
import Header from '@components/Header';
import Footer from '@components/Footer';

const Layout = (props) => (
  <React.Fragment>
    <Header />
    <Container>
      <Menu list={props.list} active={props.menuActive} />
      {props.children}
    </Container>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  list: PropTypes.arrayOf(objectShape).isRequired,
  menuActive: PropTypes.number.isRequired
};

export default Layout;
