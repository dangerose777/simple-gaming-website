import React, { useEffect } from 'react'
import './Welcome.css'
import { FaPlay } from "react-icons/fa";
import '../components/Blobs.css'

function Welcome() {
  const [showText, setShowText] = React.useState(false);
  useEffect(() => {
    setTimeout(() => { setShowText(true); }, 10);
  }, []);
  return (
    <>
      <div className="background-blobs">
        <div className="blob" id='blob1'></div>
        <div className="blob" id='blob2'></div>
        <div className="blob" id='blob3'></div>
        <div className="blob" id='blob4'></div>
      </div>

      <div className="form-container">
        <img src="/images/sample.png" alt="user-icon" className="user-image"/>
        <h1 className={`welcome-text ${showText ? 'appear' : ''}`}>
          {showText ? 'Hi! What\'s your name?' : ''}
        </h1>

        <div className="input-group">
            <input type="text" placeholder="Guest" className="username-input"/>
            <button className="next-btn"><FaPlay /></button>
        </div>
      </div>
    </>
  )
}

export default Welcome