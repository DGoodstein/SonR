
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.scss';
import { theme } from './assets/theme';
import { axiosConfig } from './config/axios.config';
import Callback from './pages/Callback/Callback';
import Login from './pages/Login/Login';
import { UserContextProvider } from './util/context.util';

function App() {

axiosConfig();

return (
    <ThemeProvider theme={theme}>
      <UserContextProvider>
        <div className="App">
          <BrowserRouter>
          <Routes>
            <Route path="/callback" element={<Callback />}/>
            <Route path="*" element={<Login />}/>
          </Routes>
          </BrowserRouter>
        </div>
      </UserContextProvider>
    </ThemeProvider>
  );
}

export default App;
