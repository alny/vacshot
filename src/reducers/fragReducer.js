import constants from '../constants'

var initialState = {

}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){

    case constants.FETCH_FRAGS:
        console.log('PARAMS: ' + JSON.stringify(action.params))
        const keys = Object.keys(action.params)
        keys.forEach((key, i) => {
            const value = action.params[key]
            updated[value] = action.payload
        })

        action.payload.forEach((frag, i) => {
          updated[frag.slug] = frag
        })

        console.log('FETCH_FRAGS ' + JSON.stringify(updated))
        return updated


    case constants.FRAG_CREATED:
        console.log('FRAG_CREATED ' + JSON.stringify(action.payload))
        let currentFrags = (updated[action.payload.category] ? Object.assign([], updated[action.payload.category]) : [])
        currentFrags.push(action.payload)
        updated[action.payload.category] = currentFrags

        return updated

    case constants.UPDATE_FRAG:
        console.log('UPDATE_FRAG ' + JSON.stringify(action.payload))
        updated['updateScore'] = action.payload
        return updated


    default:
      return state
  }
}
