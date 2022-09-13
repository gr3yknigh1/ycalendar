import React, { useCallback } from 'react';
import { Provider } from 'react-redux';

import store from './store';

export default function App(): JSX.Element {

  return (
    <Provider store={ store }>
    </Provider>
  );
}
