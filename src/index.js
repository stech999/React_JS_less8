import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AddItemstProvider from './components/add_items_cart/add_items_carts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AddItemstProvider>
      <App />
    </AddItemstProvider>
);

reportWebVitals();