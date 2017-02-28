import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { SubmitFrag } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'

class SubmitFragContainer extends Component {

  componentDidMount(){

  }


  createFrag(frag){
    let updated = Object.assign({}, frag)

    let user = this.props.account.user
    updated['profile'] = {
      username: user.username,
      image: user.image
    }
    updated['createdBy'] = user._id

    this.props.createFrag(updated)
    .then(response => {
      // window.location.reload('/')
      browserHistory.push('/')

    })
  }


  render(){
    return(
      <div>
        {(this.props.account.user == null) ? (<h2 style={{marginLeft: '660px'}}>You need to login to submit a Frag</h2>) : (
          <SubmitFrag onSubmitFrag={this.createFrag.bind(this)}/>
        )}
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    frag: state.frag,
    account: state.account
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createFrag: (frag) => dispatch(actions.createFrag(frag)),
    updateProfile: (id, params) => dispatch(actions.updateProfile(id, params))
  }
}

export default connect(stateToProps, dispatchToProps)(SubmitFragContainer)
