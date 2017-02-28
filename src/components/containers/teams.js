import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'


class teams extends Component {
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
      <div id="wrap">
        <div style={{height: '65px'}} className="hero hero-teams">
        <div className="hero-inner group">
          <h1 className="center title-long">
            <strong>Pro CS:GO </strong>
            Teams
          </h1>
        </div>
      </div>

  <div style={{paddingTop: '0px'}} id="wrap-inner">
    <div id="content" role="main">

<div id="main" className="main-full">
  <div className="group">


    <div style={{marginLeft: '150px'}} className="portal-group designers">

      <h3 style={{marginLeft: '660px'}} className="jump">
        <a href="#">Select A Team</a>
      </h3>

      <div className="scrollable-content-container">
        <ol className="portal-list-members debutants scrollable">
          <li className="group">
  <h3>
    <a className="url hoverable" href="#">
      <img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
    Astralis
    </a>
  </h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>

<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
    </ol>

    <ol className="portal-list-members debutants scrollable">
      <li className="group">
<h3>
<a className="url hoverable" href="#">
  <img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>

<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
<li className="group">
<h3>
<a className="url hoverable" href="#">
<img style={{height: '160px', width: '160px'}} className="photo" src="https://logopond.com/logos/73f68cf9bfc99062eb7348441231a34a.png"/>
Astralis
</a>
</h3>
</li>
</ol>
      </div>
    </div>
  </div>
</div>





    </div>
  </div>
</div>
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

export default connect(stateToProps, dispatchToProps)(teams)
