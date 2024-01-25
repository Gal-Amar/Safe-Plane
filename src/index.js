import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './index.css';

const theme = createTheme({
  /** Your theme override here */
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);

