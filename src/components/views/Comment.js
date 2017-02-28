import React, { Component } from 'react'
import { APIManager, DateUtils, YouTubeID } from '../../utils'
import { SignUp } from '../views'
import actions from '../../actions'
import { connect } from 'react-redux'
import  { Link, browserHistory } from 'react-router'
import ModalVideo from 'react-modal-video'


class Comment extends Component {
  constructor () {
    super()
    this.state = {
      isOpen: false,
      comment: {
        text: ''
      }
    }
  }

  openModal (id) {
    this.setState({
       isOpen: {
          [id]: true
       }
    });
 }

 submitComment(event){
   const fragSlug = this.props.params.slug
   const frag = this.props.frag[fragSlug]
   event.preventDefault()
   console.log('ID: ' + JSON.stringify(frag.id))

   this.props.fetchFragById(frag.id)
   .then(response => {
     let result = response.result
     let comments = response.result.comments

     let profile = this.props.user
     comments.push({
       id: profile._id,
       username: profile.username,
       timestamp: Date.now(),
       comment: this.state.comment
     })


     console.log('submitComment: ' + JSON.stringify(comments))

    return this.props.updateFrag(frag.id, {comments: comments})
   })


 }

 updateComment(event){
   event.preventDefault()
  let updated = Object.assign({}, this.state.comment)
  updated['text'] = event.target.value
  this.setState({
    comment: updated
  })

 }

  componentDidMount(){
    const fragSlug = this.props.params.slug
    const frag = this.props.frag[fragSlug]
    console.log('componentDidMount: ' + JSON.stringify(frag))
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
              <h3 className="page-header">Comments</h3>

              {(this.props.user == null) ? <h3>Please Login to Comment</h3> : (
                <section className="comment-list">
                  <article className="row">
                    <div style={{paddingRight: 0}} className="col-md-1 col-sm-1 hidden-xs">
                      <figure className="thumbnail">
                        <img className="img-responsive" src="http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg" />
                      </figure>
                    </div>
                    <div style={{width: '86.33%'}} className="col-md-10 col-sm-10">
                      <div className="panel panel-default arrow left">
                        <div className="panel-body">
                        <div className="form-group">
                          <textarea onChange={this.updateComment.bind(this)} className="form-control" rows="5" placeholder="Leave a comment" id="comment"></textarea>
                        </div>
                          <p style={{marginBottom: '-5px'}} className="text-right"><a onClick={this.submitComment.bind(this)} id="comment-button" href="#" className="btn btn-primary"><i className="fa fa-reply"></i> Comment</a></p>
                        </div>
                      </div>
                    </div>
                  </article>

                </section>
              ) }
              {(frag.comments == null) ? null : (
                frag.comments.map((comment, i ) => {
                  return (
                  <section key={i} className="comment-list">
                      <article className="row">
                        <div style={{paddingRight: 0}} className="col-md-1 col-sm-1 hidden-xs">
                          <figure className="thumbnail">
                            <img className="img-responsive" src="http://www.keita-gaming.com/assets/profile/default-avatar-c5d8ec086224cb6fc4e395f4ba3018c2.jpg" />
                          </figure>
                        </div>
                        <div style={{width: '86.33%'}} className="col-md-10 col-sm-10">
                          <div className="panel panel-default arrow left">
                            <div className="panel-body">
                              <header className="text-left">
                          <div style={{color: '#e0e0e0'}} className="comment-user"><strong style={{color: '#777'}}>{comment.username}</strong> commented
                          <time className="comment-date"> {DateUtils.formattedDate(comment.timestamp)}</time>
                          </div>
                        </header>
                        <div className="comment-post">
                          <p style={{color: 'black'}}>
                            {comment.comment.text}
                          </p>
                        </div>
                          </div>
                          </div>
                        </div>
                      </article>

                    </section>
                )})

              ) }


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
      <div className="follow-prompt compact">
  <a className="follow" href="/Creativedash/followers">
    <span>Follow</span>
</a>  <a className="unfollow" href="/Creativedash/followers/Creativedash">
    <span>Following</span>
</a>  <a className="unblock" data-hover="Unblock" href="/blocks/Creativedash">Blocked</a>
</div>
      <h4 className="name-and-avatar">
        <a className="url hoverable" rel="contact" href="#"><picture>
  <img className="photo" src={(this.props.user.team == 'terrorist') ? "../images/t-1.gif" : "../images/ct-1.gif"}/>
</picture>
 {frag.profile.username}</a>

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
    fetchFragById: (id) => dispatch(actions.fetchFragById(id)),
    fetchFrags: (frag) => dispatch(actions.fetchFrags(frag)),
    updateFrag: (id, params) => dispatch(actions.updateFrag(id, params))
  }
}

export default connect(stateToProps, dispatchToProps)(Comment)
