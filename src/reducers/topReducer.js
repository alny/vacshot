import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.FETCH_TOP_ACE:
        console.log('FETCH_TOP_ACE ' + JSON.stringify(action.params))
        const keys = Object.keys(action.params)
        keys.forEach((key, i) => {
            const value = action.params[key]
            updated[value] = action.payload
        })
        return updated


    default:
      return state
  }
}
