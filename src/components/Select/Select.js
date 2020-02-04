import React from 'react';

const Select = () => {

  return (
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
  )
}


export default Select
