import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'
import ModalVideo from 'react-modal-video'


class tutorials extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
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
    console.log('PROPS: ' +JSON.stringify(this.props))
  }

  componentDidUpdate(){

  }

  render(){
    return(
      <div>

<h1 id="tut-centertext" className="center with-prev-next">
  <a className="previous_page" href="#">Sunday, February 19</a>

    <strong>Map Tutorials,</strong> Smokes, Tricks and More

</h1>


<div id="main" className="main-full">
  <div style={{marginTop: '-30px'}} className="group">
    <div style={{paddingBottom: '10px'}} className="portal-group popular-shots">
      <h3 className="jump">
        <a href="/shots?date=2017-02-20">de_dust2</a>
      </h3>

      <div className="scrollable-content-container">
        <ol className="dribbbles group scrollable" data-url="/highlights/shots/day/2017-02-20.json?list=popular">
          <li id="screenshot-3305375" className="group ">
  <div className="dribbble">
    <div className="dribbble-shot">
      <div className="dribbble-img">
  <a className="dribbble-link" href="/shots/3305375-Storm-Leif-Co-2"><picture>
  <img alt="Storm &amp; Leif Co, 2" src="https://d13yacurqjgara.cloudfront.net/users/58309/screenshots/3305375/storm_leifco_finalmarks_schubert_teaser.png"/>
</picture>
</a>
  <a className="dribbble-over" href="/shots/3305375-Storm-Leif-Co-2">    <strong>Storm &amp; Leif Co, 2</strong>
      <span className="comment">Brand elements for Storm &amp; Leif Co</span>
    <em className="timestamp"></em>
</a></div>

      <ul className="tools group">
  <li className="fav">
    <a title="View fans of this shot" href="/shots/3305375-Storm-Leif-Co-2/fans">348</a>
  </li>
  <li className="cmnt">
    <span>
      17
    </span>
  </li>
  <li className="views">
    <span>2,528</span>
  </li>
</ul>

    </div>

    <div className="extras">
      <a href="/shots/3305375-Storm-Leif-Co-2/rebounds">
        <span rel="tipsy" className="rebound-mark has-rebounds"></span>
          0

</a>      <a href="/jonathanschubert">
        <span rel="tipsy" className="rebound-mark is-rebound">
          <img width="16" height="16" alt="Rebound" src="https://d13yacurqjgara.cloudfront.net/assets/icon-rebound-2x-24fe8b574874f064bcab2a8e46e0694cc39641ebef3d176c2eb742f5f0c7c308.png"/>
        </span>
</a>      <span rel="tipsy" className="attachments-mark">
        <img width="16" height="16" alt="Attachments" src="https://d13yacurqjgara.cloudfront.net/assets/icon-attach-16-2x-e9c3932a8f6aea66c54a2971b83349a8b6fac457fcaff1117cb13f74fe6766b4.png"/>
      </span>
    </div>

  </div>

  <h2 className="attribution hover-card-parent">
    <span className="attribution-user">
      <a className="url hoverable" rel="contact" href="/jonathanschubert"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/58309/avatars/mini/bbc4abcf96eee4862928cae3553c809b.jpeg?1450331634"/> Jonathan Schubert</a>
      <a className="badge-link" href="/pro">
  <span className="badge badge-pro">Pro</span>

</a>
    </span>
  </h2>
</li>

        </ol>
      </div>
    </div>

    <div className="portal-group debuts">
      <h3 className="jump">
        <a href="/shots?date=2017-02-20&amp;list=debuts">de_mirage</a>
      </h3>

      <div className="scrollable-content-container">
        <ol className="dribbbles group scrollable" data-url="/highlights/shots/day/2017-02-20.json?list=debuts">


        <li className="group" id="screenshot-3305129"><div className="dribbble"><div className="dribbble-shot"><div className="dribbble-img"><a className="dribbble-link" href="/shots/3305129-My-first-show"><picture data-alt="My first show"><img src="https://d13yacurqjgara.cloudfront.net/users/1428389/screenshots/3305129/___-1_teaser.jpg"/></picture></a></div><a className="dribbble-over" href="/shots/3305129-My-first-show"><strong>My first show</strong>
        <span className="comment"></span><em className="timestamp">about 10 hours ago</em></a></div></div><h2 className="attribution hover-card-parent"><span className="attribution-user"><a className="url hoverable" rel="contact" href="/tkgx"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/1428389/avatars/mini/61fff7d93728d85cd74f96e593f55073.jpg?1479640433"/></a></span></h2></li></ol>
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
      navbar: state.navbar

  }
}

const dispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(stateToProps, dispatchToProps)(tutorials)
