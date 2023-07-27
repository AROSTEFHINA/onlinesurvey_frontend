import React from 'react';
import { Link } from 'react-router-dom';
 

const LandingPage = () => {
  return (
    <div className="qwert">
    <div className="containersss"> 
     <h1>Welcome aro@gmail.com</h1>
      <h1>Welcome to Our Website</h1>
      <p>Please select the appropriate login option:</p>
      <div className="ducker"> <Link to="/Homeforadmin">ADMIN</Link></div>
      <br />
      <div className="ker"> <Link to="/LandingPage">USER</Link></div>

    </div>
    </div>
  );
};

export default LandingPage;