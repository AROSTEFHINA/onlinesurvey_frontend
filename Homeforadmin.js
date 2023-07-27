import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
 

const Homeforadmin = () => {
  return (
    <div>
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">SmartSurvey</a>
          </div>
          <ul>
            <li><a href="#">Home</a></li>
            
            <li><Link to="/Aboutapp">About</Link></li>
    
            <li><Link to="/Signup">Log out</Link></li>
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">MAKE SMARTER DECISIONS</div>
        <div className="sub_title">SMART SURVEY</div>
      </div>
      <div className="center1">
        <div className="sub_title1">to collect and analyze data.</div>
        <div className="btns">
          <div className="christ">
             
            <button><Link to='/FeedbackDisplayPage'>` FEEDBACKS  </Link></button>
            
          </div>
        </div>
      </div>
      {/* Footer */}
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li> <i className="fab fa-twitter"><Link to='/privacy'>Privacy policy</Link></i></li>
            
            <li><i className="fab fa-faqs"><Link to='/FAQ'>FAQs</Link></i></li>
             
          </ul>
        </div>
        <div className="footer-info">
  <div className='rowCol'>
    <center><p>&copy; 2023 SmartSurvey. All rights reserved.</p></center>
  </div></div>
      </footer>
    </div>
  );
};

export default Homeforadmin;
