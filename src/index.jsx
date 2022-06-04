import '@utils/polyfills';

import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import * as Sentry from '@sentry/react';
import { BrowserTracing } from '@sentry/tracing';

import App from '@src/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

Sentry.init({
  dsn: 'https://63c96e2afb0a417c83afd786d4071ba6@o1270468.ingest.sentry.io/6461319',
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
