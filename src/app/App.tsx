import React, { useCallback } from 'react';
import { Provider } from 'react-redux';
import {
  Routes,
  Route,
  useNavigate,
  useLocation
} from 'react-router-dom';

import store from './store';

import {
  HomePage,
  AboutPage,
  CalendarPage,
  SettingsPage,
  NotFoundPage,
} from '@/routes';


function GoBackLink() {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = useCallback(() => {
    if (location.pathname == '/') {
      navigate(0);
      return;
    }
    navigate(-1);
  }, [navigate, location]);

  return (
    <a className='link' onClick={ goBack }>Go back</a>
  );
}

export default function App(): JSX.Element {
  const location = useLocation();

  return (
    <Provider store={ store }>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <footer className='app__footer'>
        { location.pathname !== '/' && <GoBackLink />}
      </footer>
    </Provider>
  );
}
