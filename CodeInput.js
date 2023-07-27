import React from 'react';
//import './AfterUserLogin.css';
import { Link } from 'react-router-dom'; 

const CodeInput = () => {
  const handleRunCode = () => {
    // Add logic here to run the code or perform actions with the entered code
    const code = 'your-code-here'; // Replace 'your-code-here' with the actual code or URL you want to use
    console.log('Running code:', code);
  };

  return (
    <div className="qwert">
    <div className="physics">
      <h2>You can view your questions here!</h2><br></br>
      <Link to="/ShowRadio">
        <button className="maths" onClick={handleRunCode}>
          SHOW QUESTIONS
        </button></Link>
        </div>
        </div>
  );
};

export default CodeInput;