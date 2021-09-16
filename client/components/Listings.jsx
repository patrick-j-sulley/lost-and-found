import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import ListItem from './ListItemFOUND'

import { checkAuth } from '../actions/auth'

function Listings ({ auth, dispatch }) {
  const animals = []

  return (
    <>
      <Nav />
      <h1>Currently on the loose</h1>
      <div class="page-options">
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Filter v</span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Lost
              </a>   
              <a class="dropdown-item">
                Found
              </a>
            </div>
          </div>
        </div>
        <div class="dropdown is-hoverable">
          <div class="dropdown-trigger">
            <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
              <span>Sort v</span>
            </button>
          </div>
          <div class="dropdown-menu" id="dropdown-menu" role="menu">
            <div class="dropdown-content">
              <a href="#" class="dropdown-item">
                Dog
              </a>
              <a class="dropdown-item">
                Cat
              </a>
              <a class="dropdown-item">
                Rabit
              </a>
              <a class="dropdown-item">
                Chipmunk
              </a>
              <a class="dropdown-item">
                Sheep
              </a>
            </div>
          </div>
        </div>
      </div>
      {animals.map(animal => <ListItem data={animal} />)}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Listings)
