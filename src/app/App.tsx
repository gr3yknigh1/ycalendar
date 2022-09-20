import React from 'react';
import { Provider } from 'react-redux';

import store from './store';
import Calendar from '@/features/calendar';

export default function App(): JSX.Element {
  return (
    <Provider store={ store }>
      <header>
      </header>
      <main>
        <Calendar />
      </main>
      <footer>
      </footer>
    </Provider>
  );
}
