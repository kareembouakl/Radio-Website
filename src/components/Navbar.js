import React from 'react'


function Navbar() {
  //const image = require('../../../images/content-test-thumbnail-1.png');

  return (
    <nav>
      <ul>
        <div>1</div>
        <div className='logo-home'><img src={require('../assets/images/logo1.png')} alt="logo" className='logo1'/></div>
        <div>Home</div> 
        <div>About Us</div>
        <div>Shop</div>
        <div>Contact Us</div> 
        <div>Column 7</div>
        <div>Column 8</div>
        <div>Column 9</div>
        <div>Column 10</div>
        <div>(icons)</div>
        <div>(icons)</div>
      </ul>
    </nav>
  )
}

export default Navbar