import { addLostPetAPI, getLostPetsAPI } from "../apis/lost"


// --- CASES ---

export const RECEIVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'

// --- ACTION CREATORS ---

export const setAllLost = (lostPets) => {
  return {
    type: RECEIVE_LOST_PETS,
    lostPets: lostPets
  }
}

export const setLostPet = (lostPet) => {
  return {
    type: ADD_LOST_PET,
    lostPet: lostPet
  }
}

// --- THUNKS ---

export const getAllLost = () => {
  return (dispatch) => {
    getLostPetsAPI()
      .then(lostPets => {
        // console.log(lostPets)
        dispatch(setAllLost(lostPets))
      })
  }
}

export const addLostPet = (lostPet) => {
  return (dispatch) => {
    return addLostPetAPI(lostPet)
      .then(newLost => {
        dispatch(setLostPet(newLost))
      })
  }
}