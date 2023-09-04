import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Splt from './react-splt';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <h1>
        <Splt text="Libary testing" />
      </h1>
    </main>
  </React.StrictMode>,
);
