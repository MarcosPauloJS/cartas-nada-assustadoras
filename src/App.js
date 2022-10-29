import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from 'styled-components';
import './App.css';
import { StarsBackground } from './components/starsBackground/styled';
import { routers } from './routers';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StarsBackground>
        <RouterProvider router={routers} />
      </StarsBackground>
    </ThemeProvider>
  );
}

export default App;
