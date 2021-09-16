import { addFoundPetApi, getAllFoundApi } from "../apis/foundPets"

export const RECIEVE_FOUND_PETS = 'RECEIVE_FOUND_PETS'
export const ADD_FOUND_PET = 'ADD_FOUND_PET'

export const getAllFound = () => {
  return (dispatch) => {
    getAllFoundApi()
      .then(foundPets => {
        dispatch(setAllFound(foundPets))
      })
  }
}
export const setAllFound = (foundPets) => {
  return {
    type: RECIEVE_FOUND_PETS,
    lostPets: foundPets
  }
}

export const addFoundPet = (foundPet) => {
  return (dispatch) => {
    addFoundPetApi(foundPet)
      .then(newFound => {
        dispatch(setFoundPet(newFound))
      })
  }
}
export const setFoundPet = (foundPet) => {
  return {
    type: ADD_FOUND_PET,
    lostPet: foundPet
  }
}