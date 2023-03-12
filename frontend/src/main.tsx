import ReactDOM from 'react-dom/client'
import { QueryClientProvider } from 'react-query'
import { clientQuery } from './services/ReactQuery'
import { BrowserRouter } from 'react-router-dom'
import Light from './styles/themes/Light'

import App from './App'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={Light}>
    <BrowserRouter>
      <QueryClientProvider client={clientQuery}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </ThemeProvider>
);
