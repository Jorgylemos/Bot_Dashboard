import { Routes } from './routes/routes'
import GlobalStyle from './styles/GlobalStyle'

import Light from './styles/themes/Light'
import Dark from './styles/themes/Dark'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Navbar } from './components/navbar/Navbar'
import { usePersistedState } from './hooks/usePersistedState'

function App() {

  const [theme, setTheme] = usePersistedState('theme', Light)

    const toggleTheme = () => {
        setTheme(theme.title === 'light' ? Dark : Light)
    }

  return (
      <ThemeProvider theme={theme}>
        <Navbar toggleTheme={toggleTheme}  />
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
  )
}

export default App