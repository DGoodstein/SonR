
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import './App.scss';
import { theme } from './assets/theme';
import Header from './components/Header/Header';
import { axiosConfig } from './config/axios.config';
import Callback from './pages/Callback/Callback';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { UserContextProvider } from './util/context.util';

function App() {

axiosConfig();

return (
      <UserContextProvider>
        <div className="App">
          <BrowserRouter>
          <Header />
          <div className="app-container">
            <Routes>
              <Route path="/callback" element={<Callback />}/>
              <Route path="/app" element={<Home />}/>
              <Route path="*" element={<Login />}/>
            </Routes>
          </div>
          </BrowserRouter>
        </div>
      </UserContextProvider>
  );
}

export default App;
