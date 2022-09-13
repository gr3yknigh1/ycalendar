import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import {
  Routes,
  Route,
} from 'react-router-dom';

import store from './store';

import {
  HomePage,
  AboutPage,
  CalendarPage,
  SettingsPage,
  NotFoundPage,
} from '@/routes';


export default function App(): JSX.Element {

  return (
    <Provider store={ store }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Provider>
  );
}
