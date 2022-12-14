import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HttpsRedirect from 'react-https-redirect'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
  </React.StrictMode>
);
