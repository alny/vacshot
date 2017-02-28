import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'


class maps extends Component {
  constructor () {
    super()
    this.state = {

    }
  }



  componentDidMount(){
    this.props.fetchMaps()
  }

  componentDidUpdate(){

  }

  render(){
    return(
      <div id="wrap">

        <div id="wrap-inner">
          <div id="content" role="main">

      <div id="main" className="main-full">

        <h1 id="tut-centertext" className="center with-prev-next">
          <Link to={'/tutorial-overview'} style={{color: '#ef5d2d'}} className="previous_page" href="#">Back</Link>

            <strong>Map Tutorials</strong>

        </h1>

      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.dust2 == null) ? null :
            this.props.tutorial.dust2.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>
      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.mirage == null) ? null :
            this.props.tutorial.mirage.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>

      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.cobblestone == null) ? null :
            this.props.tutorial.cobblestone.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>

      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.overpass == null) ? null :
            this.props.tutorial.overpass.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>

      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.cache == null) ? null :
            this.props.tutorial.cache.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>

      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.inferno == null) ? null :
            this.props.tutorial.inferno.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>

      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.nuke == null) ? null :
            this.props.tutorial.nuke.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>

      <ol className="playoffs-list list-of-scrolling-rows">

      <li className="scrolling-row playoff group playoff-row-3314405">

        <div className="scrolling-row-inner">
          <div className="scrolling-row-intro original-shot">
              <ol className="dribbbles group">
          <li id="screenshot-3314405" className="group team">
        <div className="dribbble">
          <div className="dribbble-shot">
            <div className="dribbble-img">
        <a className="dribbble-link" href="/shots/3314405-Creative-Hours-City-of-the-future"><picture>

        <img src="images/dd2.jpg"/>
      </picture>
      </a>
        <a className="dribbble-over" href="/shots/3314405-Creative-Hours-City-of-the-future">    <strong>Creative Hours - City of the future </strong>
            <span className="comment"></span>
          <em className="timestamp">February 23, 2017</em>
      </a></div>

          </div>

        </div>
      </li>

        </ol>
          </div>

          <ol style={{paddingTop: '15px'}} className="rebounded-shots dribbbles group scrollable no-scroll-on-mobile">
            {(this.props.tutorial.train == null) ? null :
            this.props.tutorial.train.map((maps, i) => {
              return (
                <li key={i} className="good-for-sale good-23357 group" id="screenshot-3305247">
                  <div className="dribbble">
                      <div className="dribbble-shot">
                        <div style={{marginBottom: '-36px'}} className="dribbble-img">
                  <a className="dribbble-link" href="#"><picture>
                  <img alt="Dairy cow" src={maps.image}/>
                </picture>
                </a>
                  <a className="dribbble-over" href="#">    <strong>{maps.title}</strong>
                      <span className="comment"></span>
                    <em className="timestamp"></em>
                </a></div>

                      </div>

                    <div style={{textTransform: 'capitalize'}} className="buy-good group">
                      <a style={{fontSize: '13px'}} className="for-sale" >
                        <strong style={{fontSize: '15px'}}>{maps.title}</strong>
                         Weapon: {maps.weapon}, Grenade: {maps.grenade}
                        </a>
                      <div className="goods-meta">
                        <span className="category">
                          <a href="#">VAC Score: </a><span className="fragScore">{maps.votes.score}</span>
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

      </ol>

      </div>


          </div>
        </div>
      </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    tutorial: state.tutorial

  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchMaps: (params) => dispatch(actions.fetchMaps(params))
  }
}

export default connect(stateToProps, dispatchToProps)(maps)
