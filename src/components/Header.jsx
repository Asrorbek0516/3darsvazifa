import React from 'react'

function Header(props) {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Social Media Dashboard</h2>
        <p>Total Followers: 23,004</p>
      </div>

      <div className="header-right">
        <button
            className="btn"
            onClick={() => props.setDarkMode(!props.darkMode)}
            >
            {props.darkMode ? 'Light' : 'Dark'}
        </button>
      </div>
    </header>
  )
}

export default Header