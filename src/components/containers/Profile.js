import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'
import ModalVideo from 'react-modal-video'


class Profile extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
    }
  }

  openModal (id, event) {
    event.preventDefault()
    this.setState({
       isOpen: {
          [id]: true
       }
    });
 }

  componentDidMount(){
    console.log('componentDidMount: ' + JSON.stringify(this.props))

    this.props.fetchProfileAndFrags(this.props.params.createdBy)
  }


  render(){
    return(

      <div>
        <div id="wrap-inner">
    <div id="content" role="main">

<div id="main" className="main-full profile-container group ">
  {(this.props.profileFrags.selectedFrags == null) ? null :
    this.props.profileFrags.selectedFrags.map((profile, i) => {
      return (
        <div key={i} className="profile-info">
          <div className="profile-info-mod profile-essentials">
            <h2 className="vcard">
              <a className="url " rel="contact" href="/ui_star"><picture>
        <img className="photo" src={(profile.team == 'terrorist') ? "../images/t-1.gif" : "../images/ct-1.gif"}/>
      </picture>

       </a>
                <span className="location">
                  <a style={{color: '#ef5d2d'}} className="locality" href="#">{profile.username}</a>
                </span>
            </h2>

              <div style={{textTransform: 'capitalize'}} className="bio">Team: {profile.team}
      </div>

          </div>




      </div>
      )
    })
   }


<div className="profile-content">

<ol className="dribbbles group">

{(this.props.profileFrags.selectedUser == null) ? null :
this.props.profileFrags.selectedUser.map((frags, i) => {
  return (
    <li key={i} className="good-for-sale good-22720 group" id="screenshot-3275604" style={{width: 'calc(22% - 20px)', marginLeft: '9px', marginBottom: '20px'}}>
      <div className="dribbble">
          <div className="dribbble-shot">
              <div style={{borderRadius: '2px', paddingBottom: '60%'}} className="dribbble-img">
                  <a className="dribbble-link" href="#">
                      <picture>
                          <img alt="#" src={frags.image}/>

                          </picture>
                  </a>
                  <a onClick={this.openModal.bind(this, frags.id)} style={{bottom: '90px'}} className="dribbble-over grid-large" href="#">
                      <strong>{frags.title}</strong>
                      <span className="comment"></span>
                      <em className="timestamp">{DateUtils.formattedDate(frags.timestamp)}</em>
                  </a>
              </div>

          </div>

          <div className="buy-good group">
              <Link to={'/frag/' + frags.slug} style={{textTransform: 'capitalize', textDecoration: 'none'}}  className="for-sale" rel="nofollow" data-url="#" href="#">
                  <strong style={{fontSize: '14px'}}>{frags.title}</strong>
                  {frags.category}<i style={{fontSize: '12px', marginLeft: '5px'}} className="fa fa-users" aria-hidden="true"></i>

              </Link>
              <div className="goods-meta">

                  <span className="category">
                    <a href="#">VAC Score: </a><span className="fragScore">{frags.votes.score}</span>
                  </span>
                  <ModalVideo channel='youtube' isOpen={this.state.isOpen[frags.id]} videoId={YouTubeID.YouTubeGetID(frags.url)}/>
              </div>


          </div>
      </div>

  </li>
  )
})
}

  </ol>

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
      profileFrags: state.profile
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchProfileAndFrags: (id, params) => dispatch(actions.fetchProfileAndFrags(id, params))
  }
}

export default connect(stateToProps, dispatchToProps)(Profile)
