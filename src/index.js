import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import GlobalState, { GlobalContext } from './Context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/FoodRecipe">
    <React.StrictMode>
      <GlobalState>
        <App />
      </GlobalState>
    </React.StrictMode>
  </BrowserRouter>

);


