import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import AccessTokenProvider from './providers/access-token.provider'
import ArtistsProvider from './providers/artists.provider'

import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AccessTokenProvider>
      <ArtistsProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ArtistsProvider>
    </AccessTokenProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

