import React from 'react';
import Header from './Header';


function Welcome(){

  return(
    <div className="welcome-box">
      <Header/>
      <div className="welcome-content">
        <h2></h2>
        <h1></h1>
        <button className="tell-me-more">TELL ME MORE</button>
      </div>
      </div>

   
  )
}
export default Welcome;