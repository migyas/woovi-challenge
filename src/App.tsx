import { GlobalStyles, ThemeProvider } from '@mui/material';
import Routes from './routes';
import { globalStyles } from './styles/global';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <GlobalStyles styles={globalStyles} />
    </ThemeProvider>
  );
};

export default App;
