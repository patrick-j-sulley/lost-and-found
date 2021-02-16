import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'
import {loginUser, loginError} from '../actions/auth'

function Login (props) {
  const { auth, dispatch } = props

  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const confirmSuccess = () => { props.history.push('/') }
    dispatch(loginUser(formData, confirmSuccess))
  }
    
  return (
    <form className="form box" onSubmit={handleSubmit}>
      <h1 className="title is-2">Login</h1>
      <hr />
      {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
      <label className="label is-large has-text-centered">Username
        <input required className="input has-text-centered is-large is-fullwidth" placeholder="User Name" type="text" name="username" autoComplete="username" value={formData.username} onChange={handleChange}/>
      </label>
      <label className="label is-large has-text-centered">Password
        <input required className="input has-text-centered is-large is-fullwidth" placeholder="Password" type="password" name="password" autoComplete="current-password" value={formData.password} onChange={handleChange}/>
      </label>
      <input className="button is-large is-fullwidth is-success" value='Login' type="submit" />
    </form>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Login)
