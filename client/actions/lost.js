import { addLostPetApi, getAllLostApi, testFunct } from "../apis/lostPets"

export const RECIEVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'

export const getAllLost = () => {
  return (dispatch) => {
    console.log(getAllLostApi())
      // .then(lostPets => {
      //   dispatch(setAllLost(lostPets))
      // })
  }
}
export const setAllLost = (lostPets) => {
  return {
    type: RECIEVE_LOST_PETS,
    lostPets: lostPets
  }
}
export function requestAllLost () {
  return {
    type: RECIEVE_LOST_PETS,
    isFetching: true,
    isAuthenticated: false
  }
}

export const addLostPet = (lostPet) => {
  return (dispatch) => {
    return addLostPetApi(lostPet)
      .then(newLost => {
        dispatch(setLostPet(newLost))
      })
  }
}
export const setLostPet = (lostPet) => {
  return {
    type: ADD_LOST_PET,
    lostPet: lostPet
  }
}