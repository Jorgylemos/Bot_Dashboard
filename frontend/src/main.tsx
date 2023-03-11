import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { clientQuery } from './services/ReactQuery'
import { BrowserRouter } from 'react-router-dom'

import './styles/styles.css'
import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <QueryClientProvider client={clientQuery}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
