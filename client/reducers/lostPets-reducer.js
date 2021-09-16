const initialListState = {lostPets: []}

function list (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_LOST_PETS':
      return {
        lostPets: action.lostPets
      }
    case 'ADD_LOST_PET':
      return {
        lostPets: [...state, action.lostPet]
      }
    default: 
      return {
        state
      }
  }
}