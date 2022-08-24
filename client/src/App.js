import React from 'react'
import './App.css';
import { Button } from '@chakra-ui/react'
import { Routes, Route} from 'react-router-dom';
import { DashboardPage, LandingPage, LoginPage, MenuPage, DownPage, TermsPage} from './pages'

function App() {
  return (
    <div class='AppContainer'>
        <Routes>
          <Route path='/' element={<LandingPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/menu' element={<MenuPage/>} />
          <Route path='/dashboard' element={<DashboardPage/>} />
          <Route path='/down' element={<DownPage/>} />
          <Route path='/terms' element={<TermsPage/>} />
        </Routes>
    </div>
  );
}

export default App;
