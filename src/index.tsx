import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
  return (
    <div>App</div>
  );
}

const root = createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <App/>
);
