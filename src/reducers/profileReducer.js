import constants from '../constants'

var initialState = {
      selectedUser: null,
      selectedFrags: null

  }

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){

    case constants.PROFILES_RECEIVED:
      console.log('PROFILES_RECEIVED: ' + JSON.stringify(action.payload))
      let profile = action.payload
      updated[profile.id] = profile
      return updated

    case constants.PROFILE_MY_FRAGS:
      console.log('PROFILE_MY_FRAGS: ' + JSON.stringify(action.payload))
      return updated

    case constants.UPDATE_PROFILE:
        console.log('UPDATE_PROFILE ' + JSON.stringify(action.payload))

        return updated

    case constants.FETCH_PROFILE_AND_FRAGS:
        updated['selectedUser'] = action.payload[0]
        updated['selectedFrags'] = action.payload[1]
        console.log('FETCH_PROFILE_AND_FRAGS ' + JSON.stringify(updated))

        return updated

    default:
      return state
  }
}
