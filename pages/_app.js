import { ThemeProvider } from '@mui/material/styles';
import theme from './customTheme';
import HomePage from './HomePage';

function MyApp( ) {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  );
}

export default MyApp;
