import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import { Box } from "@mui/material";
import colors from './styles/colors';
import LandingPage from "./views/LandingPage/LandingPage";
import WebRoutes from './routes/routes';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
      contrastText: '#fff',
    },
    secondary: {
      main: colors.secondary,
      contrastText: '#fff',
    },
    background: {
      default: colors.bgColor,
    },
  },
  typography: {
    fontFamily: "Montserrat",
    body1: {
      fontSize: 14,
      fontWeight: 400
    },
    body2: {
      fontSize: 12,
      fontWeight: 400
    },
  },

})

function App() {
  return (

    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          {WebRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={route.component}
            />
          ))
          }
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
