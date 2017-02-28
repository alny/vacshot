import React, { Component } from 'react'
import { FilterBar, ContentWrapper } from '../views'

class Home extends Component {

  componentDidMount(){
    console.log('componentDidMount: ' + this.props.location.pathname)
  }

  render(){
    return(
      <div>
          <ContentWrapper/>
      </div>
    )
  }
}

export default Home
