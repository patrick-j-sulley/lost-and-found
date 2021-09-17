import React from 'react'

function ListItem(props, { dispatch }) {
  return (
    <div className="card card--item">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            className="petImg"
            src={props.data.photo}
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div className="card-content">
        <div className="media">
          <div className="media-content">
            {props.data.name ? (
              <p className="title is-4">{props.data.name}</p>
            ) : (
              <p className="title is-4">unknown</p>
            )}
            <p class="subtitle is-6">{props.data.species}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListItem
