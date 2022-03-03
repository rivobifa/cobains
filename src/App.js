import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/css/App.css';
import Header from './components/header/Header';
import Body from './components/body/Body';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Header />
        <Body />
      </div>
    </BrowserRouter>
  );
};

export default App;
