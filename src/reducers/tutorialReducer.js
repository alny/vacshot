import constants from '../constants'

var initialState = {
  allMaps: null,
  allWeapons: null,
  allGrenades: null,
  dust2: null,
  mirage: null,
  cobblestone: null,
  overpass: null,
  cache: null,
  inferno: null,
  nuke: null,
  train: null

}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.FETCH_TUTORIAL:
    console.log('FETCH_TUTORIAL:' + JSON.stringify(action.payload))
    updated['allMaps'] = action.payload[0]
    updated['allWeapons'] = action.payload[1]
    updated['allGrenades'] = action.payload[2]

    return updated

    case constants.TUTORIAL_CREATED:
    console.log('TUTORIAL_CREATED:' + JSON.stringify(action.payload))
    return updated

    case constants.FETCH_MAPS:
    updated['dust2'] = action.payload[0]
    updated['mirage'] = action.payload[1]
    updated['cobblestone'] = action.payload[2]
    updated['overpass'] = action.payload[3]
    updated['cache'] = action.payload[4]
    updated['inferno'] = action.payload[5]
    updated['nuke'] = action.payload[6]
    updated['train'] = action.payload[7]
    console.log('FETCH_MAPS:' + JSON.stringify(updated))

    return updated


    default:
      return state
  }
}
