import styles from './App.module.scss';

import React from 'react';
import { Provider } from 'react-redux';

import store from './store';

export default function App(): JSX.Element {
  return (
    <Provider store={ store }>
      <header>
      </header>
      <main>
      </main>
      <footer>
      </footer>
    </Provider>
  );
}
