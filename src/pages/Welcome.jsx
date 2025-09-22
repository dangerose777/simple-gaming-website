import React, { use, useEffect } from 'react'
import './Welcome.css'
import { FaPlay } from "react-icons/fa";
import '../components/Blobs.css'

function Welcome() {
  const [showText, setShowText] = React.useState(false);
  useEffect(() => {
    setTimeout(() => { setShowText(true); }, 10);
  }, []);

function nextButtonFunction() {
  console.log(username);
  localStorage.setItem('username', username);
}

useEffect(() => {
  const savedUsername = localStorage.getItem('username');
  if (savedUsername) {
    setUsername(savedUsername);
  }
  console.log(savedUsername);
}, []);

const [username, setUsername] = React.useState("");
  return (
    <>
      <div className="background-blobs">
        <div className="blob" id='blob1'></div>
        <div className="blob" id='blob2'></div>
        <div className="blob" id='blob3'></div>
        <div className="blob" id='blob4'></div>
      </div>

      <div className="form-container">
        <img src="/images/guest-icon.png" alt="user-icon" className="user-image"/>
        <h1 className={`welcome-text ${showText ? 'appear' : ''}`}>
          {showText ? 'Hi! What\'s your name?' : ''}
        </h1>

        <div className="input-group">
            <input type="text" placeholder="Guest" className="username-input" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <button className="next-btn" onClick={nextButtonFunction}><FaPlay /></button>
        </div>
      </div>
    </>
  )
}

export default Welcome