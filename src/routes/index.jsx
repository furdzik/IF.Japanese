import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { menuId, menu } from '@config/constants';

import Layout from '@components/Layout';
import PageNotFound from '@components/PageNotFound';
import GrammarMainPage from '@components/GrammarMainPage';
import OthersMainPage from '@components/OthersMainPage';
import KanaGame from '@components/KanaGame';

import Vocabulary from '@containers/Vocabulary/Vocabulary';
import VocabularyDetails from '@containers/VocabularyDetails/VocabularyDetails';
import Kanji from '@containers/Kanji/Kanji';
import KanjiDetails from '@containers/KanjiDetails/KanjiDetails';
import Verbs from '@containers/Verbs/Verbs';
import Flashcards from '@containers/Flashcards';

import VocabularyListLoading from '@components/loaders/VocabularyListLoading';

const Routes = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.addEventListener('load', () => {
      setLoading(!loading);
    });
  }, []);

  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
        >
          {
            loading ? <VocabularyListLoading /> : null
          }
          <Layout list={menu} menuActive={menuId.vocab}>
            <Vocabulary />
          </Layout>
        </Route>
        <Route
          exact
          path="/kanji"
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
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });

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
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
              });

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
          exact
          path="/verbs"
        >
          <Layout list={menu} menuActive={menuId.verbs}>
            <Verbs />
          </Layout>
        </Route>
        <Route
          exact
          path="/grammar"
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            <GrammarMainPage />
          </Layout>
        </Route>
        <Route
          exact
          path="/expressions"
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            expressions
          </Layout>
        </Route>
        <Route
          exact
          path="/grammar-to-repeat"
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            grammar-to-repeat WIP
          </Layout>
        </Route>
        <Route
          exact
          path="/grammar-politeness"
        >
          <Layout list={menu} menuActive={menuId.grammar}>
            grammar-politeness WIP
          </Layout>
        </Route>
        <Route
          exact
          path="/others"
        >
          <Layout list={menu} menuActive={menuId.others}>
            <OthersMainPage />
          </Layout>
        </Route>
        <Route
          exact
          path="/kana-game"
        >
          <Layout list={menu} menuActive={menuId.others}>
            <KanaGame />
          </Layout>
        </Route>
        <Route
          exact
          path="/flashcards"
        >
          <Layout list={menu} menuActive={menuId.others}>
            <Flashcards />
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
