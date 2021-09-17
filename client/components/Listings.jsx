import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'

import Login from './Login'
import Register from './Register'
import ListItem from './ListItem'

import { checkAuth } from '../actions/auth'
import { getAllFound } from '../actions/found'
import { getAllLost } from '../actions/lost'

function Listings({ auth, dispatch, lostPetsReducer, foundPetsReducer }) {
  const [animalsDisplay, setAnimalsDisplay] = useState([])
  // const [speciesInput, setSpeciesInput] = useState('')

  useEffect(() => {
    dispatch(getAllLost())
    dispatch(getAllFound())
  }, [])

  const lostButtonHandler = () => {
    setAnimalsDisplay(lostPetsReducer.lostPets)
  }

  const foundButtonHandler = () => {
    setAnimalsDisplay(foundPetsReducer.foundPets)
  }

  const filterSpecies = () => {
    let filterArr = []
    animalsDisplay.map(animal => {
      if (animal.species === speciesInput) {
        filterArr.push(animal)
      }
    })
    return filterArr
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    setAnimalsDisplay(filterSpecies())
  }

  const handleSpeciesInput = evt => {
    setSpeciesInput(evt.target.value)
  }

  // Workaround to get page to show both lost anf found pets on load
  const allPets = [...lostPetsReducer.lostPets, ...foundPetsReducer.foundPets]

  return (
    <>
      <h1>Currently on the loose</h1>
      <div class="page-options">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <form onSubmit={handleSubmit}>
              <label htmlFor="species input" />
              <input
                placeholder="enter species"
                type="text"
                onChange={e => handleSpeciesInput(e)}
              />
              <button>Submit</button>
            </form>
            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Filter v</span>
            </button> */}
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a onClick={lostButtonHandler} class="dropdown-item">
                Lost
              </a>
              <a onClick={foundButtonHandler} class="dropdown-item">
                Found
              </a>
            </div>
          </div>
        </div>
        {/* <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Sort v</span>
            </button>
          </div>
        </div> */}
      </div>
      <div class="card--container">
        {animalsDisplay.length <= 0
          ? // (foundPetsReducer.foundPets?.map(animal => <ListItem data={animal} />),
            // (lostPetsReducer.lostPets?.map(animal => <ListItem data={animal} />)))
            allPets?.map(animal => <ListItem data={animal} />)
          : animalsDisplay?.map(animal => <ListItem data={animal} />)}
      </div>
    </>
  )
}

const mapStateToProps = globalState => {
  return {
    auth: globalState.auth,
    lostPetsReducer: globalState.lostPetsReducer,
    foundPetsReducer: globalState.foundPetsReducer,
  }
}

export default connect(mapStateToProps)(Listings)
