import React from 'react';

import { BrowserRouter as Router, Route, Link  } from 'react-router-dom';
import { IntlProvider } from 'react-intl';
import { defaultLocale } from './lang/config';

import { english } from './lang';

import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <IntlProvider
          locale={defaultLocale}
          messages={english}
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
          <Route path="/" exact component={Home} />
          <Route path="/kanji/" component={Kanji} />
        </IntlProvider>
      </Router>
    </div>
  );
}

function Kanji() {
  return <h2>Kanji</h2>;
}

export default App;
