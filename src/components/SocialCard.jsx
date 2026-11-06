import React from 'react'

function SocialCard(props) {
  return (
    <div className="social-card">
      <div className="social-card-top">
        <h4>{props.title}</h4>
        <span>{props.icon}</span>
      </div>

      <h1>{props.followers}</h1>
      <p>Followers</p>

      <div className="social-card-bottom">
        <span>{props.change}</span>
        <p>Today</p>
      </div>
    </div>
  )
}

export default SocialCard