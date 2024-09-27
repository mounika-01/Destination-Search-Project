// src/components/DestinationItem.js
import React from 'react'
import './index.css'

const DestinationItem = ({destinationDetails}) => {
  const {name, imgUrl} = destinationDetails

  return (
    <li className="destination-item">
      <img src={imgUrl} alt={name} className="destination-image" />
      <p className="destination-name">{name}</p>
    </li>
  )
}

export default DestinationItem
