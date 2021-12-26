import React, { useEffect } from 'react';
import { useNavigationType, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { objectShape } from '@types/object';

import Container from '@components/Container';
import Footer from '@components/Footer';
import Header from '@components/Header';
import Menu from '@components/Menu';

const Layout = (props) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType !== 'POP') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname, navigationType]);

  return (
    <React.Fragment>
      <Header />
      <Container>
        <Menu list={props.list} active={props.menuActive} />
        {props.children}
      </Container>
      <Footer />
    </React.Fragment>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  list: PropTypes.arrayOf(objectShape).isRequired, // TODO menu shape
  menuActive: PropTypes.number.isRequired
};

export default Layout;
