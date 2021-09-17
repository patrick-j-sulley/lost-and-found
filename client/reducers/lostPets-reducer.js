import { RECEIVE_LOST_PETS, ADD_LOST_PET } from "../actions/lost"

const initialListState = {lostPets: []}

export default function lostPetsReducer (state = initialListState, action) {
  switch (action.type) {
    case RECEIVE_LOST_PETS:
      return {
        lostPets: action.lostPets
      }
    case ADD_LOST_PET:
      return {
        lostPets: [...state, action.lostPet]
      }
    default: 
      return state
      // {
      //   // lostPets: []
      // }
  }
}