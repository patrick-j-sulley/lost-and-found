import {combineReducers} from 'redux'

import auth from './auth'
import lostPetsReducer from './lostPets-reducer'
import foundPetsReducer from './foundPets-reducer'

export default combineReducers({
  auth,
  lostPetsReducer
})
