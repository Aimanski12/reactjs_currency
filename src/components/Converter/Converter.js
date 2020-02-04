import React from 'react';
import './Converter.css'

const Converter = () => {

  return (
    <div className="converter">
      <div className="container">

        <div className="header">
          <h1>Convert any currency</h1>
          <p>Select any currency that you want to convert. All rates are based from the European Central Bank exchange rates.</p>
        </div>
      
        <div className="calc">

          <div className="calc_container">
            <div className="input-group mb-3 select">
              <select className="custom-select" id="inputGroupSelect02">
                <option selected>Select country. . .</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className='labels'>
              <div className='labels_left'> 
                <h1>USD</h1>
                <img src='https://restcountries.eu/data/usa.svg' alt="flag"/>
              </div>
              <div className='labels_right'> 
                <p>United States of America</p>
              </div>
            </div>

            <div className="input_amount">
              <input type="number" placeholder='1'/>
            </div>

            <div className="currency_ta">
              <p>United States Dollar</p>
              <p>$ 1 USD = Y 66.6552 Yen</p>
            </div>
          </div>


           <div className="calc_container">
            <div className="input-group mb-3 select">
              <select className="custom-select" id="inputGroupSelect02">
                <option selected>Select country. . .</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>

            <div className='labels'>
              <div className='labels_left'> 
                <h1>USD</h1>
                <img src='https://restcountries.eu/data/usa.svg' alt="flag"/>
              </div>
              <div className='labels_right'> 
                <p>United States of America</p>
              </div>
            </div>

            <div className="input_amount">
              <input type="text" placeholder='1'/>
            </div>

            <div className="currency_ta">
              <p>United States Dollar</p>
              <p>$ 1 USD = Y 66.6552 Yen</p>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}
export default Converter