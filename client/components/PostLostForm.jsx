import React from 'react'
import { connect } from 'react-redux'

function PostLostForm () {
  const handleSubmit = () => {
    console.log('something in this thing')
  }

  return (
    <>
      <h1>I've lost mah mate!</h1>
      <form className="form box" onSubmit={handleSubmit} >
        <input className="input" type="text" placeholder="Enter photo URL" />
        <input className="input" type="text" placeholder="Species" /> 
      </form>
    </>
  )
}

export default connect()(PostLostForm)