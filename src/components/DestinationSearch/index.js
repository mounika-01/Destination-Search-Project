// src/components/DestinationSearch.js
import React, {useState} from 'react'
import DestinationItem from '../DestinationItem'
import './index.css'
const destinationsList = [
  {
    id: 1,
    name: 'Paris',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 2,
    name: 'New York',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 3,
    name: 'Tokyo',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 4,
    name: 'London',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 5,
    name: 'Berlin',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 6,
    name: 'Sydney',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 7,
    name: 'Rome',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 8,
    name: 'Dubai',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 9,
    name: 'Singapore',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 10,
    name: 'Istanbul',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 11,
    name: 'Bangkok',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
  {
    id: 12,
    name: 'Los Angeles',
    imgUrl:
      'https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png',
  },
]

const DestinationSearch = () => {
  const [searchInput, setSearchInput] = useState('')

  const handleSearchInputChange = event => {
    setSearchInput(event.target.value)
  }

  const filteredDestinations = destinationsList.filter(destination =>
    destination.name.toLowerCase().includes(searchInput.toLowerCase()),
  )

  return (
    <div className="destination-search-container">
      <h1>Destination Search</h1>
      <input
        type="search"
        className="search-input"
        placeholder="Search Destinations"
        value={searchInput}
        onChange={handleSearchInputChange}
      />
      <img
        className="search-icon"
        src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
        alt="search icon"
      />
      <ul className="destination-list">
        {filteredDestinations.map(destination => (
          <DestinationItem
            key={destination.id}
            destinationDetails={destination}
          />
        ))}
      </ul>
    </div>
  )
}

export default DestinationSearch
