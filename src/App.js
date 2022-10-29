import { ThemeProvider } from 'styled-components';
import './App.css';
import { StarsBackground } from './components/starsBackground/styled';
import { Home } from './pages/Home';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <StarsBackground>
        <Home/>
      </StarsBackground>
    </ThemeProvider>
  );
}

export default App;
