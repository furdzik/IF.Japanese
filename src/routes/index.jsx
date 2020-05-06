import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Vocabulary from '@containers/Vocabulary/Vocabulary';
import VocabularyDetails from '@containers/VocabularyDetails/VocabularyDetails';

const Routes = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
      >
        <Vocabulary />
      </Route>
      <Route
        exact
        path="/:vocab"
        render={(props) => {
          // eslint-disable-next-line react/prop-types
          const { vocab } = props.match.params;

          if (vocab) {
            return <VocabularyDetails name={vocab} />;
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
