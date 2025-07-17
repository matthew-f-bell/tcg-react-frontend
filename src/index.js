import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './Pages/HomePage';
import SeriesPage from './Pages/SeriesPage';
import PokeSetsPage from './Pages/PokeSetsPage';
import OnePieceSetsPage from './Pages/OneSetsPage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/series" element={<SeriesPage />} />
        <Route path="/pokemon-sets" element={<PokeSetsPage />} />
        <Route path="/one-piece-sets" element={<OnePieceSetsPage />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
