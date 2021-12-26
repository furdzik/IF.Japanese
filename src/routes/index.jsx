import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom';

import { MENU_ID, MENU } from '@constants';

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

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.vocab}>
            <Vocabulary />
          </Layout>
        )}
      />
      <Route
        path="/kanji"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.kanji}>
            <Kanji />
          </Layout>
        )}
      />
      <Route
        path="/kanji/:kanji"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.kanji}>
            <KanjiDetails />
          </Layout>
        )}
      />
      <Route
        path="/vocab/:vocab"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.vocab}>
            <VocabularyDetails />
          </Layout>
        )}
      />
      <Route
        path="/verbs"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.verbs}>
            <Verbs />
          </Layout>
        )}
      />
      <Route
        path="/grammar"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.grammar}>
            <Grammar />
          </Layout>
        )}
      />
      <Route
        path="/grammar/:grammarId"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.grammar}>
            <GrammarDetails />
          </Layout>
        )}
      />
      <Route
        path="/expressions"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.grammar}>
            expressions WIP
          </Layout>
        )}
      />
      <Route
        path="/grammar-politeness"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.grammar}>
            grammar-politeness WIP
          </Layout>
        )}
      />
      <Route
        path="/others"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.others}>
            <OthersMainPage />
          </Layout>
        )}
      />
      <Route
        path="/kana-game"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.others}>
            <KanaGame />
          </Layout>
        )}
      />
      <Route
        path="/flashcards"
        element={(
          <Layout list={MENU} menuActive={MENU_ID.others}>
            <Flashcards />
          </Layout>
        )}
      />
      <Route
        path="*"
        element={(
          <Layout list={MENU} menuActive={-1}>
            <PageNotFound />
          </Layout>
        )}
      />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
