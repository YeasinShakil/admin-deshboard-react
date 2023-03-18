
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css'

import Topbar from './pages/global/Topbar';
import { ColorModeContext, useMode } from './theme'

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <div className="app">
          <main className="content">
          <Topbar></Topbar>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
