import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SubmitFrag } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link } from 'react-router'
import ModalVideo from 'react-modal-video'

class Frags extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      isRated: false,
      hasWatched: false
    }
    this.getFrags = this.getFrags.bind(this)
  }

  openModal (id, event) {
    event.preventDefault()
    this.setState({
       isOpen: {
          [id]: true
       },
       hasWatched: {
          [id]: true
       }
    });
 }


  onRateFrag(frag, upOrDown, event){
    event.preventDefault()
    const user = this.props.account.user


    this.props.fetchFragById([frag])
    .then(response => {
      let result = response.result
      let votes = response.result.votes

      let array = votes['voters']

      let isFound = false
      array.every((voter, i) => {
        if (voter.id == user._id){
          isFound = true
          return false
        }
        return true
      })

      if (isFound) {
        toastr.warning('You already Voted')
        return
      }

      array.push({
        id: user._id
      })
      votes['voters'] = array


      votes['score'] = (votes.score+1)
      result['voters'] = votes


    return this.props.updateFrag(frag, {votes:votes})
  })
  }


  getFrags(){
    if(this.props.frag[this.props.navbar.selectedCategory] != null)
    return
    this.props.fetchFrags({category: this.props.navbar.selectedCategory})
  }

  componentDidMount(){
    this.getFrags()
  }

  componentDidUpdate(){
    this.getFrags()
  }

  render(){
    return(
        <div>
                {(this.props.frag[this.props.navbar.selectedCategory] == null) ? null :
                  this.props.frag[this.props.navbar.selectedCategory].map((frags, i) => {
                  return (
                  <li key={i} className="good-for-sale good-22720 group" id="screenshot-3275604" style={{width: 'calc(14% - 20px)', marginLeft: '9px', marginBottom: '20px'}}>
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
                                <a onClick={this.onRateFrag.bind(this, frags.id, 'voters')} className={(this.state.isRated[frags.id] == false) ? "hasRated-heart" : "rating-heart" } href="#">
                                  <i className="fa fa-heart" aria-hidden="true"></i>
                                </a>
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen[frags.id]} videoId={YouTubeID.YouTubeGetID(frags.url)}/>
                            </div>


                        </div>
                    </div>

                    <h2 className="attribution hover-card-parent">
                        <span className="attribution-user">
                            <Link to={'/profile/' + frags.createdBy} style={{color: '#ef5d2d'}} className="url hoverable" rel="contact" href="#">
                                <img className="photo" src={'images/'+frags.profile.image+'.gif'}/>
                                {frags.profile.username}</Link>
                        </span>
                    </h2>

                </li>

              )})
                }


          </div>
    )
  }
}

const stateToProps = (state) => {
  return {
    frag: state.frag,
    account: state.account,
    navbar: state.navbar,
    user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    fetchFrags: (frag) => dispatch(actions.fetchFrags(frag)),
    rateFrag: (frag) => dispatch(actions.rateFrag(frag)),
    updateFrag: (id, params) => dispatch(actions.updateFrag(id, params)),
    fetchFragById: (id) => dispatch(actions.fetchFragById(id)),
    fetchAllFrags: (frag) => dispatch(actions.fetchAllFrags(frag))
  }
}

export default connect(stateToProps, dispatchToProps)(Frags)
