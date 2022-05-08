import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

import { createServer } from 'miragejs';

import { movies } from '../src/database/db_movies'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/movies', () => {
      return movies; 
    })
  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);