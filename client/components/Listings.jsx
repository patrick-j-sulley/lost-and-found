import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useState } from 'react'

import Login from './Login'
import Register from './Register'
import ListItem from './ListItem'

import { checkAuth } from '../actions/auth'

function Listings ({ auth, dispatch }) {

  const animalsLost = [
    {
      "id": 1000,
      "name": "Steve",
      "species": "chipmunk",
      "photo": "https://i.redd.it/p8bplj0w2j131.jpg",
      "user_id": 1
    },
    {
      "id": 1001,
      "name": "Marvin",
      "species": "dog",
      "photo": "https://i.imgur.com/KAh9NOq.jpeg",
      "user_id": 2
    },
    {
      "id": 1002,
      "name": "Isabelle",
      "species": "cat",
      "photo": "https://i.imgflip.com/5110mw.png",
      "user_id": 3
    }
  ]

  const animalsFound = [
    {
      "id": 90000,
      "species": "dog",
      "photo": "https://static.vets-now.com/uploads/2017/06/my-dog-is-in-pain-320x212.jpg",
      "user_id": 4
    },
    {
      "id": 90001,
      "species": "rabbit",
      "photo": "https://static.givealittle.co.nz/assets/hero/e5d4f064-ba06-4ddd-9fe1-abfd0157eaf1-800",
      "user_id": 5
    },
    {
      "id": 90002,
      "species": "sheep",
      "photo": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFUOJm7-fzSFEwoEQbohtmV6oJmJzERCn4iACPm7yyGBz3ZUH6q-hNkPsz0ZS4ux2DUN0&usqp=CAU",
      "user_id": 6
    }
  ]

  const [animalsDisplay, setAnimalsDisplay] = useState(animalsLost)
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
