import React, {Component} from 'react'
import actions from '../../actions'
import Frags from '../containers/Frags'
import { connect } from 'react-redux'



class ContentWrapper extends Component {

  selectCategory(category, event){
  event.preventDefault()
  this.props.selectCategory(category)
}


    render() {
        return (
          <div>
            <div className="full-tabs">
                <ul style={{marginBottom: '-15px', position: 'relative', top: '-15px'}} className="shot-menu full-tabs-links">
                  <li className="more active"><a href="#">Category</a><i className="fa fa-angle-down" aria-hidden="true"></i>
                      <ul className="sub">
                        {this.props.navbar.categories.map((category, i) => {
                          return <li onClick={this.selectCategory.bind(this, category)} key={i}><a style={{textTransform: 'capitalize', textDecoration: 'none'}} href="#">{category}</a></li>

                        })}
                      </ul>
                  </li>
                    <li className="more active"><a href="#">Rating</a><i className="fa fa-angle-down" aria-hidden="true"></i>
                        <ul className="sub">
                            <li><a href="/shots?list=debuts">Debuts</a></li>
                            <li><a href="/shots?list=teams">Team Shots</a></li>
                            <li><a href="/shots?list=playoffs">Playoffs</a></li>
                            <li><a href="/shots?list=rebounds">Rebounds</a></li>
                            <li><a href="/shots?list=animated">Animated GIFs</a></li>
                            <li><a href="/shots?list=attachments">Shots with Attachments</a></li>
                        </ul>
                    </li>
                    <li className="more active"><a href="#">Now</a> <i className="fa fa-angle-down" aria-hidden="true"></i>
                        <ul className="sub">
                            <li><a href="/shots?timeframe=week">This Past Week</a></li>
                            <li><a href="/shots?timeframe=month">This Past Month</a></li>
                            <li><a href="/shots?timeframe=year">This Past Year</a></li>
                            <li><a href="/shots?timeframe=ever">All Time</a></li>
                        </ul>
                    </li>
                </ul>

          </div>
            <div id="wrap-inner">

                <div id="content" role="main">

                    <div id="main" className="main-full">

                        <ol className="dribbbles group">
                            <Frags/>

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
    navbar: state.navbar
  }
}

const dispatchToProps = (dispatch) => {
  return {
    selectCategory: (category) => dispatch(actions.selectCategory(category))

  }
}

export default connect(stateToProps, dispatchToProps)(ContentWrapper)
