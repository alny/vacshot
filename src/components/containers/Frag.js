import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'
import ModalVideo from 'react-modal-video'


class Frag extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false
    }
  }

  openModal (id) {
    this.setState({
       isOpen: {
          [id]: true
       }
    });
 }


  componentDidMount(){
    const fragSlug = this.props.params.slug
    const frag = this.props.frag[fragSlug]
    console.log('componentDidMount: ' + JSON.stringify(this.props))
  }


  render(){
    const fragSlug = this.props.params.slug
    const frag = this.props.frag[fragSlug]
    return(
      <div>
        <div id="wrap">
  <div className="hero hero-teams">
  <div className="hero-inner group">

  </div>
</div>


  <div id="wrap-inner">
    <div id="content" role="main">


<div className="constrained-content">
  <div id="main">
    <div className="group">
      <div className="copy framed under-hero">
        <a onClick={this.openModal.bind(this, frag.id)} href="#"><img className="single-frag-image" src={frag.image} alt=""/></a>
        <ModalVideo channel='youtube' isOpen={this.state.isOpen[frag.id]} videoId={YouTubeID.YouTubeGetID(frag.url)}/>

        <h2 style={{marginTop: '15px', marginBottom: '15px'}}>{frag.title}</h2>
        <h3 style={{textTransform: 'capitalize'}} className="sub">Category: {frag.category}</h3>

          <div style={{paddingLeft: 0}} className="container">
          <div className="row">
            <div className="col-md-8">
            </div>
          </div>
        </div>

      </div>
    </div>


  </div>

  <div className="secondary">

    <div className="section">
      <h3><a href="/teams">VACshot By</a></h3>
<ol className="players-list">
    <li className="user-row-107759 group player">

      <h4 className="name-and-avatar">
        <Link style={{color: '#ef5d2d'}} to={'/profile/' + frag.createdBy} className="url hoverable" rel="contact" href="#"><picture>
  <img className="photo" src="../images/t-1.gif"/>
</picture>
 {frag.profile.username}</Link>

        <span className="user-meta">
          <strong>492</strong> shots
          <i>|</i>
          <strong>77,842</strong> followers
        </span>
      </h4>
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
      frag: state.frag,
      user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(Frag)
