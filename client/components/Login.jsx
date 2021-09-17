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
    // props.history.push('/listings')
    const confirmSuccess = () => { props.history.push('/') }
    dispatch(loginUser(formData, confirmSuccess))
  }
    
  return (
    <>
    <div>
      <form className="form box login_form" onSubmit={handleSubmit}>
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="label is-normal text-user-position" id="text-input-label" >Username
          <input required className=" input is-normal"  placeholder="User Name" type="text" name="username" autoComplete="username" value={formData.username} onChange={handleChange}/>
        </label>
        <label className="label is-normal text-user-position ">Password
          <input required className=" input is-normal" placeholder="Password" type="password" name="password" autoComplete="current-password" value={formData.password} onChange={handleChange}/>
        </label>
        <input className="button is-normal button-pink" value='Login' type="submit" />
      </form>
      </div>
      <img className="login-photo" src="/images/phone-animals-illustration.png" alt="cartoon of animals and their owners doing stuff" />
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Login)
