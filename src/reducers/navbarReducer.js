import constants from '../constants'

var initialState = {
    selectedCategory: 'ace',
    selectedTopCategory: 'ace',
    categories: [
      'ace',
      'rifle',
      'clutch',
      'pistol',
      'grenade',
      'ninja',
      'awp',
      'funny',
      'knife',
      'wallbang',
      'spray'
    ]

}

export default (state = initialState, action) => {

  let updated = Object.assign({}, state)

  switch (action.type){
    case constants.NAVBAR_SELECTED:
        console.log('NAVBAR_SELECTED ' + JSON.stringify(action.payload))
        updated['selectedCategory'] = action.payload
        return updated

    case constants.TOPRATED_SELECTED:
        console.log('NAVBAR_SELECTED ' + JSON.stringify(action.payload))
        updated['selectedTopCategory'] = action.payload
        return updated


    default:
      return state
  }
}
