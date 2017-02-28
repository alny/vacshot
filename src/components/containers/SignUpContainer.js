import React, { Component } from 'react'
import { APIManager } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'

class SignUpContainer extends Component {


  register(credentials){
    let updated = Object.assign({}, credentials)

    let role = 'basic'
    let ct = 'ct-1'
    let t = 't-1'
    updated['role'] = role
    if(updated.team == 'terrorist') {
      updated['image'] = t
    } else {
      updated['image'] = ct
    }

    console.log('register: ' + JSON.stringify(updated))
    this.props.register(updated)
    .then(response => {

      // swal("Welcome To VACShot!", "Thanks for joining our Community", "success")
      swal({ title: "Welcome To VACShot!",
            text: "We need to check you are not a Bot, click Ok to get Validated",
            type: "success",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
          },
          function(){
            setTimeout(function(){
              swal("Thanks for joining our Community");
            }, 3000);
            setTimeout(function(){
              browserHistory.push('/')
              window.location.reload('/')
            }, 2000);

          });
    })
  }


  render(){
    return(
      <div>
        <SignUp onRegister={this.register.bind(this)}/>
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
    register: (credentials) => dispatch(actions.register(credentials))
  }
}

export default connect(stateToProps, dispatchToProps)(SignUpContainer)
