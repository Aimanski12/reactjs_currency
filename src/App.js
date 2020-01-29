import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Api from './components/Api/Api'
import Photospace from './components/Photospace/Photospace'
import About from './components/About/About'
import Footer from './components/Footer/Footer'

function App() {
  return (
      <div className="">
        <div className='header'>
          <Header />
        </div>

        <Api />
        <Photospace />
        <About />
        <Footer />

      </div>

    



  );
}

export default App;


