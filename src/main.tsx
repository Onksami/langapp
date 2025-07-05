import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS (includes Popper for dropdowns, popovers, and tooltips)
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Optional: Custom CSS imports should come after Bootstrap to allow overrides
import './index.css'; // If you have custom CSS

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
