import { RECEIVE_FOUND_PETS, ADD_FOUND_PET } from "../actions/found"

const initialListState = {foundPets: []}

export default function foundPetsReducer (state = initialListState, action) {
  switch (action.type) {
    case RECEIVE_FOUND_PETS:
      return {
        foundPets: action.foundPets
      }
    case ADD_FOUND_PET:
      return {
        foundPets: [...state, action.foundPet]
      }
    default: 
      return {
        state
      }
  }
}