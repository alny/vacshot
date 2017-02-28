import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'


class map extends Component {
  constructor () {
    super()
    this.state = {

    }
  }



  componentDidMount(){

  }

  componentDidUpdate(){

  }

  render(){
    return(
      <div>Map</div>
    )
  }
}

const stateToProps = (state) => {
  return {


  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(map)
