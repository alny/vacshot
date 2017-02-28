import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { Login } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'

class LoginContainer extends Component {


  login(credentials){
    console.log('register: ' + JSON.stringify(credentials))
    this.props.login(credentials)
    .then(response => {
      toastr.success('Successfully Logged In')
      browserHistory.push('/')

    })
    .catch(err => {
      toastr.warning(err.message)
    })
  }


  render(){
    return(
      <div id="wrap-inner">
          <div id="content" role="main">

              <div id="main" className="main-full">

                  <ol className="dribbbles group">
            <Login onLogin={this.login.bind(this)}/>

        </ol>

    </div>

  </div>
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
    login: (credentials) => dispatch(actions.login(credentials))
  }
}

export default connect(stateToProps, dispatchToProps)(LoginContainer)
