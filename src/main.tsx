import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Splt from './react-splt';

const titleColors = [
  ['text-lime-500'],
  ['text-green-500'],
  ['text-emerald-500'],
  ['text-teal-500'],
  ['text-cyan-500'],
  ['text-sky-500'],
  ['text-blue-500'],
];

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main>
      <p>
        <Splt array={titleColors} text="pricing" />
      </p>
    </main>
  </React.StrictMode>,
);
