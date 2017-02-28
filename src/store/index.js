import { combineReducers, applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import { navbarReducer, fragReducer, accountReducer, profileReducer, allFragsReducer, tutorialReducer, topReducer } from '../reducers'

var store;

export default {

  configureStore: () => {

      const reducers = combineReducers({
        navbar: navbarReducer,
        frag: fragReducer,
        account: accountReducer,
        profile: profileReducer,
        allFrags: allFragsReducer,
        tutorial: tutorialReducer,
        top: topReducer

      })

      store = createStore(
        reducers,
        applyMiddleware(thunk)
      )
      return store
  },

  currentStore: () => {
    return store
  }
}
