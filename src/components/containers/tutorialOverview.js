import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'
import ModalVideo from 'react-modal-video'


class tutorialOverview extends Component {
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
    if(this.props.tutorial.allMaps != null)
      return

    this.props.fetchTutorial()
  }

  componentDidUpdate(){
    if(this.props.tutorial.allMaps != null){
      return
    }
    this.props.fetchTutorial()
  }

  render(){
    return(
      <div id="wrap">


    <div style={{paddingTop: '10px'}} id="wrap-inner">
      <div id="content" role="main">



  <h1 id="tut-centertext" className="center with-prev-next">
    <Link to={'/'} style={{color: '#ef5d2d'}} className="previous_page" href="#">Back</Link>

      <strong>Map Tutorials,</strong> Smokes, Tricks and More

  </h1>

  <div className="player-list-with-filters">

    <div style={{paddingLeft: '0px'}} className="player-list-results">

      <div className="results-pane">

  <ol className="player-cards list-of-scrolling-rows">

  <li className="scrolling-row user-row-24078 player ">
    <div className="scrolling-row-inner">
      <div className="scrolling-row-intro player-info">
        <h2 className="vcard">
          <span className="hover-card-parent">
            <a className="url " rel="contact" href="/george-bokhua"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/24078/avatars/normal/b995a47ef10412a6054d3133b0f009a8.jpg?1481552676"/>
            Grenade Tutorials</a>
          </span>

          <span className="meta">
              <a className="locality" href="/designers?location=New+York">Current Maps:</a>


          </span>

            <span className="meta meta-skills">



  <a href="#">de_dust2</a>, <a href="#">de_mirage</a>, <a href="#">de_cache</a>, <a href="#">de_inferno</a>, <a href="#">de_nuke</a>, <a href="#">de_cobblestone</a>, <a href="#">de_overpass</a>, <a href="#">de_train</a>

  </span>
        </h2>

      </div>

<ol className="dribbbles group scrollable">
  {(this.props.tutorial.allMaps == null) ? null :
    this.props.tutorial.allMaps.map((tut, i) => {
      return (
        <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
          <div className="dribbble">
              <div className="dribbble-shot">
                <div style={{marginBottom: '-36px'}} className="dribbble-img">
          <a className="dribbble-link" href="#"><picture>
          <img alt="Dairy cow" src={tut.image}/>
        </picture>
        </a>
          <a className="dribbble-over" href="#">    <strong>{tut.title}</strong>
              <span className="comment"></span>
            <em className="timestamp"></em>
        </a></div>

              </div>

            <div style={{textTransform: 'capitalize'}} className="buy-good group">
              <a style={{fontSize: '13px'}} className="for-sale" >
                <strong style={{fontSize: '15px'}}>{tut.title}</strong>
                 Map: {tut.map}, Type: {tut.type}
                </a>
              <div className="goods-meta">
                <span className="category">
                  <a href="#">VAC Score: </a><span className="fragScore">{tut.votes.score}</span>
                </span>
              </div>
            </div>
          </div>

        </li>
      )
    })
   }

  </ol>

    </div>

  </li>

  <li className="scrolling-row user-row-24078 player ">
    <div className="scrolling-row-inner">
      <div className="scrolling-row-intro player-info">
        <h2 className="vcard">
          <span className="hover-card-parent">
            <Link to={'maps'} className="url " rel="contact" href="/george-bokhua"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/24078/avatars/normal/b995a47ef10412a6054d3133b0f009a8.jpg?1481552676"/>
            Map Tutorials</Link>
          </span>

          <span className="meta">
              <a className="locality" href="/designers?location=New+York">Current Maps:</a>


          </span>

            <span className="meta meta-skills">



  <a href="#">de_dust2</a>, <a href="#">de_mirage</a>, <a href="#">de_cache</a>, <a href="#">de_inferno</a>, <a href="#">de_nuke</a>, <a href="#">de_cobblestone</a>, <a href="#">de_overpass</a>, <a href="#">de_train</a>

  </span>
        </h2>

      </div>

      <ol className="dribbbles group scrollable" data-id="24078" data-url="/designers/shots?user_id=24078">
        {(this.props.tutorial.allWeapons == null) ? null :
          this.props.tutorial.allWeapons.map((tut, i) => {
            return (
              <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                <div className="dribbble">
                    <div className="dribbble-shot">
                      <div style={{marginBottom: '-36px'}} className="dribbble-img">
                <a className="dribbble-link" href="#"><picture>
                <img alt="Dairy cow" src={tut.image}/>
              </picture>
              </a>
                <a className="dribbble-over" href="#">    <strong>{tut.title}</strong>
                    <span className="comment">Wassup Dribbblers! Today i want to share with you a mini-project on Behance https://www.behance.net/gallery/49082241/Dairy-Flat-Illustrations. It s...</span>
                  <em className="timestamp"></em>
              </a></div>

                    </div>

                  <div style={{textTransform: 'capitalize'}} className="buy-good group">
                    <a className="for-sale" >
                      <strong>{tut.title}</strong>
                      Type: {tut.type}, Map: {tut.map}
              </a>      <div className="goods-meta">
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{tut.votes.score}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </li>
            )
          })
         }

  </ol>

    </div>

  </li>

  <li className="scrolling-row user-row-24078 player ">
    <div className="scrolling-row-inner">
      <div className="scrolling-row-intro player-info">
        <h2 className="vcard">
          <span className="hover-card-parent">
            <a className="url " rel="contact" href="/george-bokhua"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/24078/avatars/normal/b995a47ef10412a6054d3133b0f009a8.jpg?1481552676"/>
            Pro Player Tutorials</a>
          </span>
          <a rel="tipsy" className="jobs-mark" href="/george-bokhua/jobs">
            We’re hiring
  </a>
          <span className="meta">
              <a className="locality" href="/designers?location=New+York">Current Maps:</a>


          </span>

            <span className="meta meta-skills">



  <a href="#">de_dust2</a>, <a href="#">de_mirage</a>, <a href="#">de_cache</a>, <a href="#">de_inferno</a>, <a href="#">de_nuke</a>, <a href="#">de_cobblestone</a>, <a href="#">de_overpass</a>, <a href="#">de_train</a>

  </span>
        </h2>

      </div>

      <ol className="dribbbles group scrollable" data-id="24078" data-url="/designers/shots?user_id=24078">
        {(this.props.tutorial.allGrenades == null) ? null :
          this.props.tutorial.allGrenades.map((tut, i) => {
            return (
              <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                <div className="dribbble">
                    <div className="dribbble-shot">
                      <div style={{marginBottom: '-36px'}} className="dribbble-img">
                <a className="dribbble-link" href="#"><picture>
                <img alt="Dairy cow" src={tut.image}/>
              </picture>
              </a>
                <a className="dribbble-over" href="#">    <strong>{tut.title}</strong>
                    <span className="comment">Wassup Dribbblers! Today i want to share with you a mini-project on Behance https://www.behance.net/gallery/49082241/Dairy-Flat-Illustrations. It s...</span>
                  <em className="timestamp"></em>
              </a></div>

                    </div>

                  <div style={{textTransform: 'capitalize'}} className="buy-good group">
                    <a className="for-sale" >
                      <strong>{tut.title}</strong>
                      Type: {tut.type}, Map: {tut.map}
              </a>      <div className="goods-meta">
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{tut.votes.score}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
         }

  </ol>

    </div>

  </li>

  <li className="scrolling-row user-row-24078 player ">
    <div className="scrolling-row-inner">
      <div className="scrolling-row-intro player-info">
        <h2 className="vcard">
          <span className="hover-card-parent">
            <a className="url " rel="contact" href="/george-bokhua"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/24078/avatars/normal/b995a47ef10412a6054d3133b0f009a8.jpg?1481552676"/>
            Weapon Tutorials</a>
          </span>
          <a rel="tipsy" className="jobs-mark" href="/george-bokhua/jobs">
            We’re hiring
  </a>
          <span className="meta">
              <a className="locality" href="/designers?location=New+York">Current Maps:</a>


          </span>

            <span className="meta meta-skills">



  <a href="#">de_dust2</a>, <a href="#">de_mirage</a>, <a href="#">de_cache</a>, <a href="#">de_inferno</a>, <a href="#">de_nuke</a>, <a href="#">de_cobblestone</a>, <a href="#">de_overpass</a>, <a href="#">de_train</a>

  </span>
        </h2>

      </div>

      <ol className="dribbbles group scrollable" data-id="24078" data-url="/designers/shots?user_id=24078">
        {(this.props.tutorial.allGrenades == null) ? null :
          this.props.tutorial.allGrenades.map((tut, i) => {
            return (
              <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                <div className="dribbble">
                    <div className="dribbble-shot">
                      <div style={{marginBottom: '-36px'}} className="dribbble-img">
                <a className="dribbble-link" href="#"><picture>
                <img alt="Dairy cow" src={tut.image}/>
              </picture>
              </a>
                <a className="dribbble-over" href="#">    <strong>Dairy cow</strong>
                    <span className="comment">Wassup Dribbblers! Today i want to share with you a mini-project on Behance https://www.behance.net/gallery/49082241/Dairy-Flat-Illustrations. It s...</span>
                  <em className="timestamp"></em>
              </a></div>

                    </div>

                  <div style={{textTransform: 'capitalize'}} className="buy-good group">
                    <a className="for-sale" >
                      <strong>{tut.title}</strong>
                      Type: {tut.type}, Map: {tut.map}
              </a>      <div className="goods-meta">
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{tut.votes.score}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </li>
            )
          })
         }
  </ol>

    </div>

  </li>

  <li className="scrolling-row user-row-24078 player ">
    <div className="scrolling-row-inner">
      <div className="scrolling-row-intro player-info">
        <h2 className="vcard">
          <span className="hover-card-parent">
            <a className="url " rel="contact" href="/george-bokhua"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/24078/avatars/normal/b995a47ef10412a6054d3133b0f009a8.jpg?1481552676"/>
            Tips and Tricks Tutorials</a>
          </span>
          <a rel="tipsy" className="jobs-mark" href="/george-bokhua/jobs">
            We’re hiring
  </a>
          <span className="meta">
              <a className="locality" href="/designers?location=New+York">Current Maps:</a>


          </span>

            <span className="meta meta-skills">



  <a href="#">de_dust2</a>, <a href="#">de_mirage</a>, <a href="#">de_cache</a>, <a href="#">de_inferno</a>, <a href="#">de_nuke</a>, <a href="#">de_cobblestone</a>, <a href="#">de_overpass</a>, <a href="#">de_train</a>

  </span>
        </h2>

      </div>

      <ol className="dribbbles group scrollable">
        {(this.props.tutorial.allGrenades == null) ? null :
          this.props.tutorial.allGrenades.map((tut, i) => {
            return (
              <li key={i} className="good-for-sale good-23357 group">
                <div className="dribbble">
                    <div className="dribbble-shot">
                      <div style={{marginBottom: '-36px'}} className="dribbble-img">
                <a className="dribbble-link" href="#"><picture>
                <img alt="Dairy cow" src={tut.image}/>
              </picture>
              </a>
                <a className="dribbble-over" href="#"><strong>Dairy cow</strong>
                    <span className="comment"></span>
                  <em className="timestamp"></em>
              </a></div>

                    </div>

                  <div style={{textTransform: 'capitalize'}} className="buy-good group">
                    <a className="for-sale" >
                      <strong>{tut.title}</strong>
                      Type: {tut.type}, Map: {tut.map}
              </a>      <div className="goods-meta">
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{tut.votes.score}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })
         }

  </ol>

    </div>

  </li>

  </ol>



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
      tutorial: state.tutorial,
      frag: state.frag,
      navbar: state.navbar

  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchTutorial: (tutorial) => dispatch(actions.fetchTutorial(tutorial))
  }
}

export default connect(stateToProps, dispatchToProps)(tutorialOverview)
