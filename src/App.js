import React from 'react';

import { IntlProvider, addLocaleData } from 'react-intl';
import { defaultLocale } from './lang/config';
import { polish } from './lang';

import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <IntlProvider
          locale={defaultLocale}
          messages={polish}
        >
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/kanji/">Kanji</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Index} />
          <Route path="/kanji/" component={Kanji} />
        </IntlProvider>
      </Router>
    </div>
  );
}

function Index() {
  return <h2>Home</h2>;
}

function Kanji() {
  return <h2>Kanji</h2>;
}

export default App;
