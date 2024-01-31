import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { createTheme, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import 'mantine-flagpack/styles.css';
import './index.css';

const theme = createTheme({
  fontFamily: "Rubik, sans-serif",
  headings: { fontFamily: 'Rubik,, sans-serif' },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(  
  <MantineProvider theme={theme}>
    <App />
  </MantineProvider>
);

