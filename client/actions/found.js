import { addFoundPetAPI, getFoundPetsAPI } from "../apis/found"


// --- CASES ---

export const RECEIVE_FOUND_PETS = 'RECEIVE_FOUND_PETS'
export const ADD_FOUND_PET = 'ADD_FOUND_PET'

// --- ACTION CREATORS ---

export const setAllFound = (foundPets) => {
  return {
    type: RECEIVE_FOUND_PETS,
    foundPets: foundPets
  }
}

export const setFoundPet = (foundPet) => {
  return {
    type: ADD_FOUND_PET,
    foundPet: foundPet
  }
}

// --- THUNKS ---

export const getAllFound = () => {
  return (dispatch) => {
    getFoundPetsAPI()
      .then(foundPets => {
        console.log(foundPets)
        dispatch(setAllFound(foundPets))
      })
  }
}

export const addFoundPet = (foundPet) => {
  return (dispatch) => {
    return addFoundPetAPI(foundPet)
      .then(newFound => {
        dispatch(setFoundPet(newFound))
      })
  }
}