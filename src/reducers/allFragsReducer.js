import constants from '../constants'

var initialState = {
  all: null
}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){

    case constants.FETCH_ALL_FRAGS:
    updated['all'] = action.payload
    console.log('FETCH_ALL_FRAGS:' + JSON.stringify(updated))


    return updated


    default:
      return state
  }
}
