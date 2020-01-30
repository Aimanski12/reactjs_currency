import React from 'react';
import './Currency.css'

const Currency = () => {

  return (
    <div className="currency">
      <div className="container">
        
        <div className="main_desc">
          <h2>Choose your currency</h2>
          <p>All rates are referrenced from European Central Bank published exchanged rates.</p>
          <div class="input-group mb-3 select">
            <select class="custom-select" id="inputGroupSelect02">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>


          <div className='main_converter'>

            <div className="left">

              <div className="country">
                <p className="cur_name">USD</p>
                <img src='https://restcountries.eu/data/usa.svg' alt="flag"/>
              </div>

              <div className='country_cur'>
                <p>United States Dollar</p>
              </div>
              
            </div>

            <div className="center">
              <h5>=</h5>
            </div>
            <div className="right">
              <p className="amount"><i>$ 1 USD</i></p>
              <p className="amount_exchange">
                <i>$ 1 USD = 1 $ USD</i></p>
            </div>


          </div>


      </div>
    </div>
  )
}
export default Currency