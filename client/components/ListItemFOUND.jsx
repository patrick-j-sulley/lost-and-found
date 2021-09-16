import React from 'react'
import { connect } from 'react-redux'

function ListItemFOUND(props, { dispatch }) {

  return (
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src={props.photo} alt="Placeholder image"/>
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{props.name}</p>
            <p class="subtitle is-6">{props.species}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect()(ListItemFOUND)