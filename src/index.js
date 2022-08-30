import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import HttpsRedirect from 'react-https-redirect'
import DocumentMeta from 'react-document-meta';

const meta = {
  title: 'Pourquoi installer une pompe à chaleur ?',
  description: "Pourquoi installer une pompe à chaleur ? Gratuit et sans engament, 70% d'économie sur vos factures, Jusqu'a 10 500€ d'aide pour votre pompe à chaleur, Jusqu'a 100% de financement",
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'optineo, pac, pompe-a-chaleur, pac-info'
    }
  }
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DocumentMeta {...meta}>
      <HttpsRedirect>
        <App />
      </HttpsRedirect>
    </DocumentMeta>
  </React.StrictMode>
);
