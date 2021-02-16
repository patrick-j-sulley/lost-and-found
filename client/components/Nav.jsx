import React, { useState } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/auth'

function Nav (props) {
  const { auth, dispatch } = props

  const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible((prevBurgerState) => {
      return !prevBurgerState
    })
  }

  const logout = () => {
    const confirmSuccess = () => props.history.push('/')
    dispatch(logoutUser(confirmSuccess))
  }

  return <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <span onClick={toggleBurger} className={`navbar-burger burger ${burgerVisible ? 'is-active' : ''}`} data-target="navbarMenuHeroA">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className={`navbar-menu ${burgerVisible ? "is-active" : ''}`}>
          <div className="navbar-end">
            { auth.isAuthenticated
              ? (
                  <Link to='/' className="navbar-item is-large" onClick={() => logout()}>Logout</Link>
                )
              : (
                <>
                  <Link onClick={toggleBurger} className="navbar-item is-large" to='/login'>Login</Link>
                  <Link onClick={toggleBurger} className="navbar-item" to='/register'>Register</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </nav>
  }

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Nav)
