import React from 'react'

// import logo from ...

function Header() {
  
    return (
      <div>
        <header className="welcome">
         <div className='logo-menu-box'>
           {/* <img className='logo-svg' src={logo}/> */}
         <button className='menu-button-mobile'>MENU</button>
          </div>

          <ul className='nav-link-box'>
           <li className="nav-link">SERVICES</li>
           <li className="nav-link">PORTFOLIO</li>
           <li className="nav-link">ABOUT</li>
           <li className="nav-link">TEAM</li>
           <li className="nav-link">CONTACT</li>
         </ul>
       </header>
        
      </div>
    )
  }


export default Header
