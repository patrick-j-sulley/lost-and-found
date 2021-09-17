import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

import {loginError, registerUserRequest} from '../actions/auth'

function Register (props) {
  const { auth, dispatch } = props
  
  const [formData, setFormData] = useState({
    username: '',
    contact_details: '',
    email_address: '',
    password: '',
    confirm_password: ''
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
    e.target.reset()
    // props.history.push('/listings')

    let { password, confirm_password } = formData

    if (confirm_password != password){
      dispatch(loginError("Passwords don't match"))
    } else {
      const confirmSuccess = () => { props.history.push('/') }
      const userInfo = { ...formData }
      delete userInfo.confirm_password
      dispatch(registerUserRequest(userInfo, confirmSuccess))
    }
  }

  return (
    <>
      <form className="form-positioning-register Register form box" onSubmit={handleSubmit}>
        {auth.errorMessage && <span className="has-text-danger is-large">{auth.errorMessage}</span>}
        <label className="label is-normal">Username
          <input required className="login_form input is-normal" placeholder="User Name" type="text" name="username" autoComplete="username" onChange={handleChange} value={formData.username}/>
        </label>
        <div className="columns">
          <label className="label is-normal">Contact Details
            <input required className="login_form input is-normal" placeholder="Contact Details" type="text" name="contact_details" onChange={handleChange} value={formData.contact_details}/>
          </label>
          <label className="label is-normal">Email Address
            <input required className="login_form input is-normal" placeholder="Email Adress" type="text" name="email_address" onChange={handleChange} value={formData.email_address}/>
          </label>
        </div>
        <br />
        <div className="columns">
          <label className="label is-normal">Password
            <input required className="login_form input is-normal" placeholder="Password" type="password" name="password"  autoComplete="new-password" onChange={handleChange} value={formData.password}/>
          </label>
          <label className="label is-normal">Confirm Password
            <input required className="login_form input is-normal" placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password}/>
          </label>
        </div>
        <input className="button is-normal button-pink" value="Register" type="submit" />
      </form>
      <img className="registration-photo" src="/images/Animals-people-illustration.png" alt="cartoon of animals and their owners doing stuff" />
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    auth: globalState.auth
  }
}

export default connect(mapStateToProps)(Register)
