import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'


class team extends Component {
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


  <div style={{paddingTop: '1px'}} id="wrap-inner">
    <div id="content" role="main">



<h1 className="team-center"><strong>Projects</strong></h1>

<div id="main" className="main-full">


  <ol className="list-of-scrolling-rows buckets-list">


  <li id="bucket-449830" className="scrolling-row group bucket ">
  <div className="scrolling-row-inner">
    <div className="scrolling-row-intro bucket-info">

      <a className="url hoverable" rel="contact" title="Dimosthenis ▲" href="/dimosthenis_pap"><picture>
  <img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/742877/avatars/small/cefb6e93cdff5c3f80b081392b0b3e33.jpg?1453299814"/>
</picture>
</a>

      <div className="bucket-name"><a href="/dimosthenis_pap/projects/449830-Branding">Branding</a></div>

      <div className="bucket-user">
          By
        <a className="url" rel="contact" href="/dimosthenis_pap">Dimosthenis ▲</a>
      </div>

        <div className="bucket-description">
          Branding and Logotype projects.
        </div>



      <div className="bucket-count">
        <strong>5</strong>
        <span className="meta">shots</span>
      </div>

      <div className="bucket-timestamp">Updated about 4 hours ago</div>
    </div>

    <ol className="bucket-shots dribbbles group scrollable " data-id="449830" data-url="/buckets/shots?id=449830-Branding&amp;type=Project"><li className="group" id="screenshot-2509555"><div className="dribbble"><div className="dribbble-shot"><div className="dribbble-img"><a className="dribbble-link" href="/shots/2509555-Secure-Browser-Icon"><picture data-alt="Secure Browser Icon...">
      <img src="https://d13yacurqjgara.cloudfront.net/users/742877/screenshots/2509555/_______-1___________teaser.png"/>

    </picture></a></div><a className="dribbble-over" href="/shots/2509555-Secure-Browser-Icon">
      <strong>Secure Browser Icon...</strong><span className="comment">Hey friends!

Few weeks ago I designed this icon for Secure Browser.
Secure Browser has the world’s first browser integrated security management co...</span><em className="timestamp">February 07, 2016</em></a></div></div></li></ol>
  </div>
</li></ol>


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

export default connect(stateToProps, dispatchToProps)(team)
