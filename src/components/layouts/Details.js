import React, { Component } from 'react'
import { VideoSmall, VideoLarge, ContentWrapper, SubmitFrag } from '../views'
import { SubmitFragContainer, Frags, SignUpContainer, LoginContainer, topRated, Profile } from '../containers'

class Detail extends Component {

  componentDidMount(){
    const query = this.props.location.query

    console.log('componentDidMount: ' + JSON.stringify(query))
  }

  render(){
    let component = null
		const username = this.props.params.username
		const query = this.props.location.query
		switch (this.props.params.page) {
			case 'profile':
				return component = <Profile username={username} query={query} />

			default:
				return component = null
		}

    return(
      {component}
    )
  }
}

export default Detail
