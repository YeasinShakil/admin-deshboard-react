
import { CssBaseline, ThemeProvider } from '@mui/material';

import './App.css'
import Sidebar from './pages/global/Sidebar';

import Topbar from './pages/global/Topbar';
import { ColorModeContext, useMode } from './theme'
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline></CssBaseline>
        <ProSidebarProvider>
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar></Topbar>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
