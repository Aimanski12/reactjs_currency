import React, {Fragment} from 'react';
import './Header.css'

import Navbar from './Navbar/Navbar'
import Middle from './Middle/Middle'

const Header = () => {

  return (
    <Fragment>
      <Navbar />
      <Middle />
    </Fragment>
  )
}

export default Header
