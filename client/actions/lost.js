import { getAllLostApi } from "../apis/lostPets"

export const RECIEVE_LOST_PETS = 'RECEIVE_LOST_PETS'
export const ADD_LOST_PET = 'ADD_LOST_PET'

export const getAllLost = () => {
  return (dispatch) => {
    getAllLostApi()
      .then(lostPets => {
        setAllLost(lostPets)
      })
  }
}

export const setAllLost = (lostPets) => {
  return {
    type: RECIEVE_LOST_PETS,
    lostPets: lostPets
  }
}

export const addLost = (lostPet) => {
  return {
    type: ADD_LOST_PET,
    lostPet: lostPet
  }
}

export function loginUser (creds, confirmSuccess) {
  return dispatch => {
    dispatch(requestLogin())
    return login(creds)
      .then(userInfo => {
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch(err => {
        dispatch(loginError(err))
      })
  }
}