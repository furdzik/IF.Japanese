import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { menu } from '@config/constants';

import Menu from '@components/Menu';
import Header from '@components/Header';
import Container from '@components/Container';
import Footer from '@components/Footer';
import Vocabulary from '@containers/Vocabulary/Vocabulary';
import VocabularyDetails from '@containers/VocabularyDetails/VocabularyDetails';
import Kanji from '@containers/Kanji/Kanji';
import KanjiDetails from '@containers/KanjiDetails/KanjiDetails';
import Verbs from '@containers/Verbs/Verbs';

const Routes = () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
        >
          <Header />
          <Container>
            <Menu list={menu} active={1} />
            <Vocabulary />
          </Container>
          <Footer />
        </Route>
        <Route
          path="/kanji"
          exact
        >
          <Header />
          <Container>
            <Menu list={menu} active={2} />
            <Kanji />
          </Container>
          <Footer />
        </Route>
        <Route
          exact
          path="/kanji/:kanji"
          render={(props) => {
            // eslint-disable-next-line react/prop-types
            const { kanji } = props.match.params;

            if (kanji) {
              return (
                <React.Fragment>
                  <Header />
                  <Container>
                    <Menu list={menu} active={2} />
                    <KanjiDetails kanji={kanji} />
                  </Container>
                  <Footer />
                </React.Fragment>
              );
            }

            return null;
          }}
        />
        <Route
          exact
          path="/vocab/:vocab"
          render={(props) => {
            // eslint-disable-next-line react/prop-types
            const { vocab } = props.match.params;

            if (vocab) {
              return (
                <React.Fragment>
                  <Header />
                  <Container>
                    <Menu list={menu} active={1} />
                    <VocabularyDetails name={vocab} />
                  </Container>
                  <Footer />
                </React.Fragment>
              );
            }

            return null;
          }}
        />
        <Route
          path="/verbs"
          exact
        >
          <Header />
          <Container>
            <Menu list={menu} active={3} />
            <Verbs />
          </Container>
          <Footer />
        </Route>
        <Route
          path="/grammar"
          exact
        >
          <Header />
          <Container>
            <Menu list={menu} active={4} />
            WIP
          </Container>
          <Footer />
        </Route>
        <Route
          render={() => <h1>Page not found</h1>}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
