import React, {Fragment} from 'react';
import './Page_Two.css'

import Navbar from '../../components/Navbar/Navbar'
import Currency from '../../components/Currency/Currency'
import Api from '../../components/Api/Api'
import Photo from '../../components/Photospace/Photospace'
import About from '../../components/About/About'
import Footer from '../../components/Footer/Footer'

const PageTwo = () => {

  return (
    <Fragment>
       <div className="header">
        <Navbar />
        <Currency />
      </div>
      <Api />
      <Photo />
      <About />
      <Footer />
    </Fragment>
  )
}

export default PageTwo

