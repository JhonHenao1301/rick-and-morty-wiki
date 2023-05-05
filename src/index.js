import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStylesStyled from './components/global-styles';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <>
        <GlobalStylesStyled />
        <App />
      </>
  </React.StrictMode>
);

reportWebVitals();
