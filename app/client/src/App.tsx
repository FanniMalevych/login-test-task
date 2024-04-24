import Home from './pages/home'
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { Provider } from 'react-redux'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import store from './store'
import SignInSide from './pages/log-in';
import SignUpSide from './pages/sign-up';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#B29F7E',
    },
    success: {
      main: '#B29F7E'
    }
  },
  typography: {
    fontFamily: ['Lato', 'Raleway', 'sans-serif'].join(', '),
  },
})

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<SignInSide/>}/>
            <Route path="/signup" element={<SignUpSide/>}/>
          </Routes>
        </Provider>
    </Router>
    </ThemeProvider>
    </>
  )
}

export default App
