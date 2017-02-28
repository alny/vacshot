import constants from '../constants'
import { APIManager } from '../utils'

const getRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.get(path, params)
      .then(response => {
        //console.log('GET: ' + JSON.stringify(response))

        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response


      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err
      })
}

const postRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.post(path, params)
      .then(response => {
        //console.log('POST: ' + JSON.stringify(response))

        const payload = response.results || response.result || response.user

        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response

      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err

      })
}

const putRequest = (path, params, actionType) => {
  return (dispatch) =>
      APIManager.handlePut(path, params)
      .then(response => {
        //console.log('POST: ' + JSON.stringify(response))

        const payload = response.results || response.result || response.user && response.foundUser


        dispatch({
          type: actionType,
          payload: payload,
          params: params
        })
        return response

      })
      .catch(err => {
        console.log('ERRROR: ' + JSON.stringify(err.message))
        throw err

      })
}


export default {

    selectNavbar: (navbar) => {
      return {
        type: constants.NAVBAR_SELECTED,
        payload: navbar
      }
    },

    selectCategory: (category) => {
      return {
        type: constants.NAVBAR_SELECTED,
        payload: category
      }
    },

    selectTopCategory: (category) => {
      return {
        type: constants.TOPRATED_SELECTED,
        payload: category
      }
    },
    // -----------------------PROFILE -------------------------------------------------//

    fetchProfile: (id) => {
      return (dispatch) => {
        return dispatch(getRequest('/api/profile/' + id, null, constants.PROFILES_RECEIVED))
      }
    },
    fetchProfileAndFrags: (id, params) => {
      return (dispatch) => {
        return dispatch(getRequest('/profile/userFrags/' + id, params, constants.FETCH_PROFILE_AND_FRAGS))
      }
    },
    updateProfile: (id, params) => {
      return dispatch => {
        return dispatch(putRequest('/api/profile/'+id, params, constants.UPDATE_PROFILE))
        }
      },
      register: (credentials) => {
      return (dispatch) => {
        return dispatch(postRequest('/account/register', credentials, constants.PROFILE_CREATED))
        }
      },
      checkCurrentUser: () => {
        return (dispatch) => {
          return dispatch(getRequest('/account/currentuser', {}, constants.USER_LOGGED_IN))
        }
      },
      login: (credentials) => {
        return (dispatch) => {
          return dispatch(postRequest('/account/login', credentials, constants.USER_LOGGED_IN))
        }
      },
      logOut: () => {
        return (dispatch) => {
          return dispatch(getRequest('/account/logout', {}, constants.USER_LOGGED_IN))
        }
      },

      // -----------------------FRAG -------------------------------------------------//
      createFrag: (params) => {
        return (dispatch) => {
          return dispatch(postRequest('/api/frag', params, constants.FRAG_CREATED))
        }
      },
      fetchFrags: (params) => {
        return dispatch => {
          return dispatch(getRequest('/api/frag', params, constants.FETCH_FRAGS))
        }
      },
      fetchFragById: (id) => {
        return dispatch => {
          return dispatch(getRequest('/profile/found/'+id, null, null))
        }
      },
      updateFrag: (id, params) => {
        return dispatch => {
          return dispatch(putRequest('/api/frag/'+id, params, constants.UPDATE_FRAG))
          }
      },

      fetchTopAces: (params) => {
        return (dispatch) => {
          return dispatch(getRequest('/top/sorted', params, constants.FETCH_TOP_ACE))
        }
      },
      fetchAllFrags: (params) => {
        return dispatch => {
          return dispatch(getRequest('/top/allfrags', params, constants.FETCH_ALL_FRAGS))
        }
      },
      fetchProfileFrags: (params) => {
        return dispatch => {
          return dispatch(getRequest('/profile/my-frags', params, constants.PROFILE_MY_FRAGS))
        }
      },
      // ----------------------- TUTORIAL -------------------------------------------------//

      createTutorial: (params) => {
        return (dispatch) => {
          return dispatch(postRequest('/api/tutorial', params, constants.TUTORIAL_CREATED))
        }
      },
      fetchTutorial: (params) => {
        return dispatch => {
          return dispatch(getRequest('/tutorial/alltutorials', params, constants.FETCH_TUTORIAL))
        }
      },
      fetchMaps: (params) => {
        return dispatch => {
          return dispatch(getRequest('/tutorial/allmaps', params, constants.FETCH_MAPS))
        }
      }


}
