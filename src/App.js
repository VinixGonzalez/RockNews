import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MenuSuperior from './components/MenuSuperior';
import Footer from './components/Footer';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuSuperior />
        <Routes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
