import React from 'react';
import './App.css';

import Header from './components/Header/Header'
import Api from './components/Api/Api'
import Photospace from './components/Photospace/Photospace'
import About from './components/About/About'


function App() {
  return (
      <div className="">
        <div className='header'>
          <Header />
        </div>

        <Api />
        <Photospace />
        <About />

        <div className="footer">
          <div className="my_website">
            <p><a href="">aimanadlawan.com</a></p>
          </div>
          <div className="social_media">
            
          </div>
        </div>


        <div className="photo">

        </div>


      </div>

    



  );
}

export default App;


