import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'
import ModalVideo from 'react-modal-video'


class topRated extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
    }
    this.getAces = this.getAces.bind(this)
  }

  openModal (id) {
    this.setState({
       isOpen: {
          [id]: true
       }
    });
 }


 getAces(){
   if(this.props.top[this.props.navbar.selectedTopCategory] != null)
     return
   this.props.fetchTopAces({category: this.props.navbar.selectedTopCategory})
 }

  componentDidMount(){
    console.log('componentDidMount: ' + this.props.location.pathname)

    this.getAces()
  }

  componentDidUpdate(){
    this.getAces()
  }

  render(){
    return(
<div>
      <div style={{height: '65px'}} className="hero hero-teams">
      <div className="hero-inner group">
        <h1 style={{textTransform: 'capitalize'}} className="center title-long">
          <strong>Top 8 Rated </strong>
          {this.props.navbar.selectedTopCategory}
        </h1>
      </div>
    </div>
<div id="wrap-inner">
  <div style={{marginLeft: '180px'}} id="content" role="main">

<div id="main" className="main-full">

<ol className="dribbbles group">
  {(this.props.top[this.props.navbar.selectedTopCategory] == null) ? null :
    this.props.top[this.props.navbar.selectedTopCategory].map((aces, i) => {
      return (
        <li key={i} style={{width: 'calc(22% - 20px)', marginTop: '-9px'}} className="good-for-sale good-23010 group" id="screenshot-3294441">
        <div className="dribbble">
            <div className="dribbble-shot">
              <div style={{paddingBottom: '57%'}} className="dribbble-img">
        <a className="dribbble-link" href="#"><picture>
        <img alt="European Restaurant Premium Moto CMS 3 Template" src={aces.image}/>
      </picture>
      </a>
        <a style={{height: '185px'}} className="dribbble-over" href="#"><strong>{aces.title}</strong>
            <span className="comment">
      </span>
          <em className="timestamp">{DateUtils.formattedDate(aces.timestamp)}</em>
      </a></div>

            </div>

          <div className="buy-good group">
            <a style={{textTransform: 'capitalize', textDecoration: 'none'}} className="for-sale" rel="nofollow" data-url="#" href="#">
              <h3 style={{marginTop: 0, marginBottom: '10px'}}>#{i+1}</h3>
              <strong>{aces.title}</strong>
              {aces.category}
      </a><div className="goods-meta">
              <span className="price"><span className="fragScore">{aces.votes.score}</span></span>
              <span className="category">
                <a href="/goods?category=themes">Vac Score</a>
              </span>
            </div>
          </div>
        </div>


        <h2 className="attribution hover-card-parent">
          <span className="attribution-user">
            <Link to={'/profile/' + aces.profile.id} style={{color: '#ef5d2d'}} className="url hoverable" rel="contact" href="#"><img className="photo" src={'images/'+aces.profile.image+'.gif'}/>
            {aces.profile.username}</Link>
          </span>
        </h2>

      </li>
      )
    })

  }


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
      top: state.top,
      navbar: state.navbar

  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchTopAces: (frag) => dispatch(actions.fetchTopAces(frag))


  }
}

export default connect(stateToProps, dispatchToProps)(topRated)
