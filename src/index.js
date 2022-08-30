import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HttpsRedirect from 'react-https-redirect'
import {Helmet} from "react-helmet";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HttpsRedirect>
        <Helmet>
          <meta name="description" content="Pourquoi installer une pompe à chaleur ? Gratuit et sans engament, 70% d'économie sur vos factures, Jusqu'a 10 500€ d'aide pour votre pompe à chaleur, Jusqu'a 100% de financement"/>
        </Helmet>
        <App />
      </HttpsRedirect>
  </React.StrictMode>
);
