import React from 'react'
import "./css/Navbar.css"
function Navbar() {
  return (
    <header>
      <div className="navbar ">
        <div class="nav-logo hover-border">
          <div class="logo"></div>
        </div>
        <div className='navbar-address hover-border'>
            <div className='navbar-address-block1'>
              Deliver to
            </div>
            <div className='navbar-address-block2'>
            <i class="fa-sharp fa-solid fa-location-dot"></i>&nbsp;
              India
            </div>

        </div>
        <div className='navbar-search '>
        <select className='search-select'>
          <option>All</option>
        </select>
        <input placeholder='Search Amazon'></input>
      </div>
      <div className='search-icon-div'>
      <i class="fa-solid fa-magnifying-glass"></i>      </div>

      <div className='navbar-signin hover-border' >
      <p className='navbar-signin-smaller'>Hello, sign in</p>
      <p className='navbar-signin-bigger'>Accounts & lists <i className="fa-sharp fa-solid fa-angle-down"></i></p>
      </div>

      <div className='navbar-orders hover-border' >
      <p className='navbar-signin-smaller'>Returns</p>
      <p className='navbar-signin-bigger'>and orders <i className="fa-sharp fa-solid fa-angle-down"></i></p>
      </div>

      <div class="nav-cart hover-border">
      <p className='cart-icone'><span><i class="fa-solid fa-cart-shopping fa-2xl"></i></span></p>
      <p class="nav-second"> Cart</p>
        </div>
  
      </div>

      <div class="pannel border">
      <div class="pannel-all">
          <i class="fa-solid fa-bars"></i>All &nbsp; &nbsp;
      </div>
      <div class="pannel-options">
          <p>Today's deals</p>
          <p>Customer service</p>

          <p>Registery</p>
          <p>Gift cards</p>
          <p>Sell on amazon</p>
          <p>50% off sale</p>

      </div>

      
      </div>

    </header>
  );
}

export default Navbar