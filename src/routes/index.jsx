import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { menu } from '@config/constants';

import Menu from '@components/Menu';
import Container from '@components/Container';
import Vocabulary from '@containers/Vocabulary/Vocabulary';
import Kanji from '@containers/Kanji/Kanji';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
      >
        <Container>
          <Menu list={menu} active={1} />
          <Vocabulary />
        </Container>
      </Route>
      <Route
        path="/kanji"
        exact
      >
        <Container>
          <Menu list={menu} active={2} />
          <Kanji />
        </Container>
      </Route>
      <Route
        exact
        path="/vocab/:vocab"
        render={(props) => {
          // eslint-disable-next-line react/prop-types
          const { vocab } = props.match.params;

          if (vocab) {
            return (<Container>
              <Menu list={menu} active={1} />
              <Vocabulary />
            </Container>);
          }

          return null;
        }}
      />
      <Route
        render={() => <h1>Page not found</h1>}
      />
    </Switch>
  </Router>
);

export default Routes;
