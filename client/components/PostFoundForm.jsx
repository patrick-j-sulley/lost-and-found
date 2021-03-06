import React from 'react'
import { connect } from 'react-redux'

function PostFoundForm() {
  const handleSubmit = () => {
    console.log('submitting this new FOUND FORM')
  }

  return (
    <>
      <h1 className="title is-1 l-a-f">Lost and Found</h1>
      <form className="form box" onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="Enter photo URL" />
        <input className="input" type="text" placeholder="Species" />
      </form>
    </>
  )
}

export default connect()(PostFoundForm)
