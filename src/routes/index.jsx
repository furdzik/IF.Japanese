import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import { menuId, menu } from '@config/constants';

import Layout from '@components/Layout';
import PageNotFound from '@components/PageNotFound';
import OthersMainPage from '@components/OthersMainPage';
import KanaGame from '@components/KanaGame';

import Vocabulary from '@containers/Vocabulary';
import VocabularyDetails from '@containers/VocabularyDetails';
import Kanji from '@containers/Kanji';
import KanjiDetails from '@containers/KanjiDetails';
import Verbs from '@containers/Verbs';
import Flashcards from '@containers/Flashcards';
import Grammar from '@containers/Grammar';
import GrammarDetails from '@containers/GrammarDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
      >
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
                <KanjiDetails key={kanji} kanji={kanji} />
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
          <Grammar />
        </Layout>
      </Route>
      <Route
        exact
        path="/grammar/:grammarId"
        render={(props) => {
          // eslint-disable-next-line react/prop-types
          const { grammarId } = props.match.params;

          if (grammarId) {
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });

            return (
              <Layout list={menu} menuActive={menuId.grammar}>
                <GrammarDetails grammarId={grammarId} />
              </Layout>
            );
          }

          return null;
        }}
      />
      <Route
        exact
        path="/expressions"
      >
        <Layout list={menu} menuActive={menuId.grammar}>
          expressions WIP
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

export default Routes;
