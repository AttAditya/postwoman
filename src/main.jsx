import { render } from 'preact';

import { App } from './App.jsx';
import { RequestProvider } from '@contexts/request.jsx';

import '@styles/index.css';

render(
  <RequestProvider>
    <App />
  </RequestProvider>,
  document.getElementById('root')
);

