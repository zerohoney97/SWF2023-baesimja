// reducer combine

import { combineReducers } from 'redux'

import login from './login'
import signup from './signup'
import search from './search'

const rootReducer = combineReducers({login, signup, search});

export default rootReducer;