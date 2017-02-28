import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { AddTutorial } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'

class addTutorialContainer extends Component {

  componentDidMount(){

  }


  createTutorial(tutorial){

    console.log('tutorial: ' + JSON.stringify(tutorial))

    this.props.createTutorial(tutorial)
  }

  render(){
    return(
      <div>
        {(this.props.account.user == null) ? (<h2 style={{marginLeft: '660px'}}>You need to login to submit a Frag</h2>) : (
          <AddTutorial onSubmitTutorial={this.createTutorial.bind(this)}/>
        )}
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {

    account: state.account
  }
}

const dispatchToProps = (dispatch) => {
  return {
    createTutorial: (params) => dispatch(actions.createTutorial(params))
  }
}

export default connect(stateToProps, dispatchToProps)(addTutorialContainer)
