import React, { Component } from 'react'
import { VideoSmall, VideoLarge, ContentWrapper, SubmitFrag } from '../views'
import { SubmitFragContainer, Frags, SignUpContainer, LoginContainer, topRated, tutorialOverview, Profile } from '../containers'

class Split extends Component {

  componentDidMount(){
  }

  render(){

  const path = this.props.location.pathname.replace('/', '')
  const parts = path.split('/')
  const page = parts[0]


  let content = null
  if (parts.length == 1){

      if (page == 'tutorials')
          content = <tutorials {...this.props} />

      if (page == 'signup')
            content = <SignUpContainer />

      if (page == 'login')
            content = <LoginContainer />

      if (page == 'submit')
          content = <SubmitFragContainer />

    }
      if (parts.length == 2){
      const createdBy = parts[1]
      if(page == 'profile'){
      content = <Profile {...this.props} createdBy={createdBy} />
      }
  }

    return(
      <div id="wrap-inner">
          <div id="content" role="main">

              <div id="main" className="main-full">

                  <ol className="dribbbles group">

                      { content }

                  </ol>

              </div>

          </div>
      </div>

    )
  }
}

export default Split
