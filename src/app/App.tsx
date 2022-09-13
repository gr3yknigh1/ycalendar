import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import {
  Routes,
  Route,
} from 'react-router-dom';

import store from './store';

import {
  HomePage,
} from '@/routes';


export default function App(): JSX.Element {

  return (
    <Provider store={ store }>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Provider>
  );
}
