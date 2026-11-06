import React from 'react'

function OverviewCard(props) {
  return (
    <div className="overview-card">
      <div className="overview-card-top">
        <p>{props.title}</p>
        <span>{props.icon}</span>
      </div>

      <div className="overview-card-bottom">
        <h2>{props.value}</h2>
        <span>{props.percent}</span>
      </div>
    </div>
  )
}

export default OverviewCard