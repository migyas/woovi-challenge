import { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import SuspenseLoader from './components/SuspenseLoader';

const root = createRoot(document.getElementById('app'));
window.Buffer = window.Buffer || require('buffer').Buffer;

root.render(
  <BrowserRouter>
    <Suspense fallback={<SuspenseLoader />}>
      <App />
    </Suspense>
  </BrowserRouter>,
);
