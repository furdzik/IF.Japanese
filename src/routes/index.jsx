import React from 'react';
import {
  BrowserRouter,
  Route,
  Routes
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

const RoutesConfig = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={(
          <Layout list={menu} menuActive={menuId.vocab}>
            <Vocabulary />
          </Layout>
        )}
      />
      <Route
        path="/kanji"
        element={(
          <Layout list={menu} menuActive={menuId.kanji}>
            <Kanji />
          </Layout>
        )}
      />
      <Route
        path="/kanji/:kanji"
        element={(
          <Layout list={menu} menuActive={menuId.kanji}>
            <KanjiDetails />
          </Layout>
        )}
      />
      <Route
        path="/vocab/:vocab"
        element={(
          <Layout list={menu} menuActive={menuId.vocab}>
            <VocabularyDetails />
          </Layout>
        )}
      />
      <Route
        path="/verbs"
        element={(
          <Layout list={menu} menuActive={menuId.verbs}>
            <Verbs />
          </Layout>
        )}
      />
      <Route
        path="/grammar"
        element={(
          <Layout list={menu} menuActive={menuId.grammar}>
            <Grammar />
          </Layout>
        )}
      />
      <Route
        path="/grammar/:grammarId"
        element={(
          <Layout list={menu} menuActive={menuId.grammar}>
            <GrammarDetails />
          </Layout>
        )}
      />
      <Route
        path="/expressions"
        element={(
          <Layout list={menu} menuActive={menuId.grammar}>
            expressions WIP
          </Layout>
        )}
      />
      <Route
        path="/grammar-politeness"
        element={(
          <Layout list={menu} menuActive={menuId.grammar}>
            grammar-politeness WIP
          </Layout>
        )}
      />
      <Route
        path="/others"
        element={(
          <Layout list={menu} menuActive={menuId.others}>
            <OthersMainPage />
          </Layout>
        )}
      />
      <Route
        path="/kana-game"
        element={(
          <Layout list={menu} menuActive={menuId.others}>
            <KanaGame />
          </Layout>
        )}
      />
      <Route
        path="/flashcards"
        element={(
          <Layout list={menu} menuActive={menuId.others}>
            <Flashcards />
          </Layout>
        )}
      />
      <Route
        path="*"
        element={(
          <Layout list={menu} menuActive={-1}>
            <PageNotFound />
          </Layout>
        )}
      />
    </Routes>
  </BrowserRouter>
);

export default RoutesConfig;
