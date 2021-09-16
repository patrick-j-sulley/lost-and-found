import React from 'react'

function PetProfile(props) {
  
  return (
    <div class="profile-container">
      <div class="profile-details">
        <p><strong>{props.data.name}</strong></p>
        <p>{props.data.species}</p>
      </div>
      <div class="profile-image">
        <img src={props.data.photo} alt="pet profile image" />
      </div>
    </div>
  )
}

export default PetProfile