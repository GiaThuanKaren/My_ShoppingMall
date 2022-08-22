import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes,Link } from 'react-router-dom';
import { Home } from './page';
import { PublicRoute } from './routes';

function App() {
  return (
    <>
    <Routes>
      <Route path={PublicRoute.Home} element={<Home />}/>
    </Routes>
    </>
  );
}

export default App;
