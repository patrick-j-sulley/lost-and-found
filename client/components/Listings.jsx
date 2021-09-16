import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import ListItem from './ListItem'

import { checkAuth } from '../actions/auth'

function Listings ({ auth, dispatch }) {
  const animalsLost = []
  const animalsFound = []
  const [animalsDisplay, setAnimalsDisplay] = useState ([])
  const [speciesInput, setSpeciesInput] = useState('')

  const lostButtonHandler = () => {
    setAnimalsDisplay(animalsLost)
  }

  const foundButtonHandler = () => {
    setAnimalsDisplay(animalsFound)
  }

  const filterSpecies = () => {
    let filterArr = []
      animalsDisplay.map(animal => {
       if ( animal.species === speciesInput ) {
         filterArr.push(animal)
       }
      })
      return filterArr
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    setAnimalsDisplay(filterSpecies()) 
  }

  const handleSpeciesInput = (evt) => {
    setSpeciesInput(evt.target.value)
  }
  
  return (
    <>
      <Nav />
      <h1>Currently on the loose</h1>
      <div class="page-options">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <form onSubmit={handleSubmit}>
              <label htmlFor='species input' />
              <input placeholder='enter species' type='text' onChange={(e) => handleSpeciesInput(e)}/>
              <button>Submit</button>
            </form>
            {/* <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Filter v</span>
            </button> */}
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a onClick={lostButtonHandler} href="#" class="dropdown-item">
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
      {animalsDisplay.map(animal => <ListItem data={animal} />)}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Listings)
