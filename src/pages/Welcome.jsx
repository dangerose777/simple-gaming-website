import React from 'react'
import './Welcome.css'
import { FaPlay } from "react-icons/fa";

function App() {
  return (
    <>
      <div className="form-container">
        <img src="/images/sample.png" alt="user-icon" className="user-image"/>
        <h1 className="welcome-text">Hi! What's your name?</h1>
        <div className="input-group">
            <input type="text" placeholder="Guest" className="username-input"/>
            <button className="next-btn"><FaPlay /></button>
        </div>
      </div>
    </>
  )
}

export default App