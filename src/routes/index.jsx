import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { menuId, menu } from '@config/constants';

import Layout from '@components/Layout';
import PageNotFound from '@components/PageNotFound';
import GrammarMainPage from '@components/GrammarMainPage';

import Vocabulary from '@containers/Vocabulary/Vocabulary';
import VocabularyDetails from '@containers/VocabularyDetails/VocabularyDetails';
import Kanji from '@containers/Kanji/Kanji';
import KanjiDetails from '@containers/KanjiDetails/KanjiDetails';
import Verbs from '@containers/Verbs/Verbs';

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 200);
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          path="/"
          exact
        >
          <Layout list={menu} menuActive={menuId.vocab}>
            <Vocabulary />
          </Layout>
        </Route>
        <Route
          path="/kanji"
          exact
        >
          <Layout list={menu} menuActive={menuId.kanji}>
            <Kanji />
          </Layout>
        </Route>
        <Route
          exact
          path="/kanji/:kanji"
          render={(props) => {
            // eslint-disable-next-line react/prop-types
            const { kanji } = props.match.params;

            if (kanji) {
              return (
                <Layout list={menu} menuActive={menuId.kanji}>
                  <KanjiDetails kanji={kanji} />
                </Layout>
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
                <Layout list={menu} menuActive={menuId.vocab}>
                  <VocabularyDetails name={vocab} />
                </Layout>
              );
            }

            return null;
          }}
        />
        <Route
          path="/verbs"
          exact
        >
          <Layout list={menu} menuActive={menuId.verbs}>
            <Verbs />
          </Layout>
        </Route>
        <Route
          path="/grammar"
          exact
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            <GrammarMainPage />
          </Layout>
        </Route>
        <Route
          path="/grammar-list"
          exact
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            grammar-list WIP
          </Layout>
        </Route>
        <Route
          path="/grammar-to-repeat"
          exact
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            grammar-to-repeat WIP
          </Layout>
        </Route>
        <Route
          path="/grammar-politeness"
          exact
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            grammar-politeness WIP
          </Layout>
        </Route>
        <Route
          render={() => (
            <Layout list={menu} menuActive={-1}>
              <PageNotFound />
            </Layout>
          )}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
