import React from 'react'

function ListItem(props, { dispatch }) {

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
            {props.name ? <p class="title is-4">{props.name}</p> : <p></p>}            
            <p class="subtitle is-6">{props.species}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem