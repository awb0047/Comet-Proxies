import React from 'react'
import './App.css';
import { Button } from '@chakra-ui/react'
import { Routes, Route} from 'react-router-dom';
import { DashboardPage, LandingPage, MenuPage} from './pages'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>} />
      <Route path='/menu' element={<MenuPage/>} />
      <Route path='/dashboard' element={<DashboardPage/>} />
    </Routes>
    // <div className="App">
    //   <Button colorScheme='orange'>Button</Button>
    // </div>
  );
}

export default App;
