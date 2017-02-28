import React, {Component} from 'react'


class SignUp extends Component {
  constructor(){
    super()
    this.state = {
      credentials: {
        username: '',
        password: '',
        team: ''
      }
    }
  }

  updateCredentials(event){
    event.preventDefault()
    let updated = Object.assign({}, this.state.credentials)
    updated[event.target.id] = event.target.value
    console.log('credentials: ' + event.target.id + ' == ' + event.target.value)
    this.setState({
      credentials: updated
    })

  }

  submitRegister(event){
    event.preventDefault()
    console.log('register: ' + JSON.stringify(this.state.credentials))
    this.props.onSubmitRegister(this.state.credentials)


  }

    render() {
        return (
        <div className="container">
          <div className="col-lg-3">

          </div>

          <div className="col-lg-6">


        				<div className="input-group">
                            <span className="input-group-addon"><i className="icon-user"></i></span>
                            <input onChange={this.updateCredentials.bind(this)} id="username" className="form-control" placeholder="Username" />
                        </div>
                        <br/>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon-key"></i></span>
                            <input onChange={this.updateCredentials.bind(this)} id="password" type="password" className="form-control" placeholder="Password" />
                        </div>
                        <br/>
                        <div className="input-group">
                            <span className="input-group-addon"><i className="icon-email"></i></span>
                              <select onChange={this.updateCredentials.bind(this)} style={{color: '#999'}} className="form-control">
                                  <option disabled selected value>Choose A Team</option>
                                  <option value="counter-terrorist">Counter-Terrorist</option>
                                  <option value="terrorist">Terrorist</option>
                              </select>
                        </div>
                        <br/>
                        <label style={{marginLeft: '20px'}} className="checkbox">
                            <input type="checkbox" value="accepted" /> I Accept the Terms Of Service
                        </label>
                        <input onClick={this.submitRegister.bind(this)} type="submit" name="commit" value="Submit" className="form-sub"/>



        </div>
      </div>


        )
    }
}

export default SignUp


<li><Link to={'/top-rated'} href="#">Top 8 Aces</Link></li>
<li><Link to={'/'} href="#">Top 8 Rifle</Link></li>
<li><Link to={'/'} href="#">Top 8 Clutch</Link></li>
<li><Link to={'/'} href="#">Top 8 Pistol</Link></li>
<li><Link to={'/'} href="#">Top 8 Grenade</Link></li>
<li><Link to={'/'} href="#">Top 8 Ninja</Link></li>
<li><Link to={'/'} href="#">Top 8 Awp</Link></li>
<li><Link to={'/'} href="#">Top 8 Funny</Link></li>
<li><Link to={'/'} href="#">Top 8 Knife</Link></li>
<li><Link to={'/'} href="#">Top 8 Wallbang</Link></li>
<li><Link to={'/'} href="#">Top 8 Spray</Link></li>


  <div className="container">
    <div className="col-lg-3">

    </div>

    <div className="col-lg-6">


          <div className="input-group">
                      <span className="input-group-addon"><i className="icon-user"></i></span>
                      <input onChange={this.updateCredentials.bind(this)} id="username" autoComplete="off" className="form-control" placeholder="Username" />
                  </div>
                  <br/>
                  <div className="input-group" id="top-login-password">
                      <span className="input-group-addon"><i className="icon-key"></i></span>
                      <input onChange={this.updateCredentials.bind(this)} id="password" type="password" autoComplete="off" className="form-control" placeholder="Password" />
                  </div>
                  <br/>
                  <div className="input-group" id="top-login-username">
                      <span className="input-group-addon"><i className="icon-email"></i></span>
                        <select onChange={this.updateCredentials.bind(this)} id="team" style={{color: '#999'}} className="form-control">
                            <option disabled selected value>Choose A Team</option>
                            <option value="counter-terrorist">Counter-Terrorist</option>
                            <option value="terrorist">Terrorist</option>
                        </select>
                  </div>
                  <br/>
                  <label style={{marginLeft: '20px'}} className="checkbox">
                      <input type="checkbox" defaultValue="accepted" /> I Accept the Terms Of Service
                  </label>
            <button onClick={this.submitRegister.bind(this)} className="btn btn-primary btn-block">Sign In</button>


  </div>
</div>



<div id="content" role="main">

    <div style={{marginLeft: '215px'}} className="constrained-content-alt">


        <div id="main">
          <img style={{marginLeft: '250px'}} src="images/vacshot-guy.png" alt=""/>

            <form className="account gen-form with-messages">
                <div className="form-field">
                    <fieldset className="user_url">
                        <label htmlFor="user_url">YouTube URL</label><input onChange={this.updateFrag.bind(this)} autoComplete="off" id="url" type="text"/></fieldset>
                    <p className="message">Example:<strong> https://www.youtube.com/watch?v=
                            <span>dX25pCK5yow</span>
                        </strong>
                    </p>
                </div>

                <div className="form-field">
                    <fieldset className="user_url">
                    <label htmlFor="user_url">Category</label>
                    <select onChange={this.updateFrag.bind(this)} id="category" style={{color: '#999', background: '#e4e4e4', height: '40px'}} className="form-control">
                        <option disabled selected value>Find Your Category</option>
                        <option value="ace">Ace</option>
                        <option value="rifle">Rifle</option>
                        <option value="clutch">Clutch</option>
                        <option value="pistol">Pistol</option>
                        <option value="grenade">Grenade</option>
                        <option value="ninja">Ninja</option>
                        <option value="awp">Awp</option>
                        <option value="funny">Funny</option>
                        <option value="knife">Knife</option>
                        <option value="wallbang">Wallbang</option>
                        <option value="spray">Spray</option>

                    </select></fieldset>
                  <p className="message">Pick the right Category for your Video</p>
                </div>

                <div className="form-field">
                    <fieldset>
                        <label htmlFor="user_prospect">Guidelines and Rules Acceptance:</label>
                        <input type="hidden" value="0"/><input type="checkbox" id="checkedBox"/>
                        <a target="_blank" href="#"> I Accept the Guidelines and Rules</a>

                    </fieldset>
                </div>

                <div className="form-btns">
                    <input onClick={this.submitFrag.bind(this)} value="Submit" className="btn btn-primary btn-block"/>
                </div>
            </form>

        </div>
    </div>

</div>
