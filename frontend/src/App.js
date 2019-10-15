import React from 'react';
import './App.css';

import logo from './assets/logo.png';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <div className="container">

        <img src={logo} alt="Techcom" className="logo" />
        <div className="content">
          
          <header className="label-content">Folgas marcadas:</header>

          <Routes />
        </div>

      </div>
    </div>
  );
}

export default App;
