import React, { Component } from 'react'
import { Navbar, Footer, FilterBar } from '../views'

class Main extends Component {

  render(){
    return(
      <div>
      <Navbar {...this.props}/>
          <div style={{marginTop: '35px'}} id="wrap">
              {this.props.children}
          </div>
      <Footer/>
      </div>
    )
  }
}

export default Main
