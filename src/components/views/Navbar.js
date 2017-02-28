import React, {Component} from 'react'
import  { Link, browserHistory} from 'react-router'
import actions from '../../actions'
import { connect } from 'react-redux'


class Navbar extends Component {

  componentDidMount(){
    console.log('location: ' + this.props.location.pathname)
    if(this.props.user == null)
    this.props.checkCurrentUser()
  }

  logOut(){
    this.props.logOut()
    .then(response => {
      browserHistory.push('/')
    })
  }


  selectTopCategory(category, event){
  event.preventDefault()
  this.props.selectTopCategory(category)
 }

    render() {
    let path = this.props.location.pathname
        return (

<div id="header" role="banner" className="group">
    <div id="header-inner" className="group">

        <ul id="nav" role="navigation">

          <div id="logo">
            <Link to={'/'}><img className="bullet-logo" src="images/bullet_v1.png"/></Link>
            </div>

            <li id="t-shots">
              <Link style={{color: 'grey'}} to={'/'} className={(path === '/' && 'nav-active')} href="#">Frags</Link>
                <ul className="tabs">
                    <li><a href="#">Event Frags</a></li>
                    <li><a href="#">FPL Frags</a></li>
                    <li><a href="#">ESEA Rank S Frags</a></li>
                </ul>

            </li>

            <li id="t-players">
                <Link to={'/top-rated'} className={(path === '/top-rated' && 'nav-active')} href="#">Top Rated</Link>
                <ul className="tabs">
                    {this.props.navbar.categories.map((category, i ) => {
                      return <li onClick={this.selectTopCategory.bind(this, category)} key={i}><Link to={'/top-rated'} style={{textTransform: 'capitalize'}} href="#">Top 8 {category}</Link></li>
                    })}
                </ul>
            </li>

            <li id="t-teams">
              <Link to={'/tutorial-overview'} className={(path === '/tutorial-overview' && 'nav-active')} href="#">Tutorials</Link>
                <ul className="tabs">
                    <li><a href="#">Grenade Tutorials</a></li>
                    <li><a href="#">Map Tutorials</a></li>
                    <li><a href="#">Pro Player Tutorials</a></li>
                    <li><a href="#">Weapon Tutorials</a></li>
                    <li><a href="#"></a></li>
                    <li className="separate">
                      <a href="#">Tips and Tricks</a>
                    </li>
                </ul>
            </li>

            <li id="t-community">
              <Link to={'/teams'} className={(path === '/teams' && 'nav-active')} href="#">Pro Players</Link>
                <ul className="tabs">
                    <li><a href="#">Teams</a></li>
                    <li><a href="#">HLTV.org Top 20 Players</a></li>
                    <li><a href="#">Semi-Pro Players</a></li>
                </ul>
            </li>

            <li id="t-community">
                <a href="#">Fragmovies</a>
                <ul className="tabs">
                  <li><a href="#">Event Movies</a></li>
                  <li className="separate"></li>
                  <li><a href="#">Highlights</a></li>
                  <li className="separate"></li>
                  <li><a href="#">Pro Player Movies</a></li>
                  <li className="separate"></li>
                  <li><a href="#">Moviemakers</a></li>



                </ul>
            </li>

            <li id="t-jobs">
                <a href="#">Prizes</a>
                <ul className="tabs">
                  <li><a href="#">Giveaways</a></li>
                  <li className="separate"></li>
                  <li><a href="#">Prizes this Month</a></li>
                  <li className="separate"></li>
                  <li><a href="#">Prizes this Year</a></li>
                </ul>
            </li>

            <li id="t-jobs">
                <a href="#">VACboard</a>
            </li>

            {(this.props.user == null) ? (
              <div>


              <li id="t-search" role="search">
                  <form id="search" action="#">
                      <Link to={'/login'} className="has-sub" href="#"><input style={{backgroundColor: '#ef5d2d'}} type="submit" value="Log In" className="form-sub"/></Link>
                  </form>
              </li>

              <li id="t-search" role="search" style={{marginRight: 80}}>
                  <form id="search" action="#">
                      <Link to={'/signup'} className="has-sub" href="#"><input style={{backgroundColor: '#ef5d2d'}} type="submit" value="Sign Up" className="form-sub"/></Link>
                  </form>
              </li>
              </div>

            ) : ( <div>

              <li id="t-profile" style={{marginTop: '36px'}}>

                  <a className="has-sub" href="#">

                      <img style={{position: 'relative', top: -17}} width="18" height="18" src={(this.props.user.team == 'terrorist') ? "images/t-1.gif" : "images/ct-1.gif"} alt="Avatar default"/>
                      <span style={{position: 'relative', left: 25, bottom: 16, textTransform: 'capitalize', color: '#ef5d2d'}}>{this.props.user.username}</span>

                  </a>

                  <ul className="tabs">

                      <li>
                          <a style={{textTransform: 'capitalize'}} href="#">
                              <span style={{color: '#ef5d2d'}}>Team:</span> {this.props.user.team}
                          </a>
                      </li>
                      <li className="separate"><a href="#">Profile Settings</a></li>
                      <li><a href="#">My Frags</a></li>
                      <li><a href="#">My Favorites</a></li>
                      {(this.props.user.role != 'basic') ? null : (
                        <div>
                          <li className="separate"><Link to={'add-tutorial'} href="#">Add Tutorial</Link></li>
                          <li><a href="#">Add Fragmovie</a></li>
                        </div>
                      )}

                      <li className="separate"><a href="/account">Help and Support</a></li>

                      <li><a onClick={this.logOut.bind(this)} rel="nofollow" data-method="delete" href="#">Sign Out</a></li>
                  </ul>

              </li>

              <li id="t-search" role="search" style={{color: '#ddd'}}>
                  <form id="search" action="#">
                      <Link to={'/submit'} className="has-sub" href="#"><input style={{backgroundColor: '#ef5d2d'}} type="submit" value="Add VACshot" className="form-sub"/></Link>
                  </form>
              </li>

                </div> ) }

        </ul>
    </div>
</div>


        )
    }
}

const stateToProps = (state) => {
  return {
      navbar: state.navbar,
      user: state.account.user
  }
}

const dispatchToProps = (dispatch) => {
  return {
    selectTopCategory: (category) => dispatch(actions.selectTopCategory(category)),
    checkCurrentUser: () => dispatch(actions.checkCurrentUser()),
    logOut: () => dispatch(actions.logOut())
  }
}

export default connect(stateToProps, dispatchToProps)(Navbar)
