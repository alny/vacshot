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
    if(this.state.credentials.username.length == 0){
      toastr.warning('Enter a Username to Sign Up Please!')
      return
    }
    if(this.state.credentials.username.length < 4){
      toastr.warning('Please select a Username over 4 Characters')
      return
    }
    if(this.state.credentials.password.length == 0){
      toastr.warning('Enter a Password to Sign Up Please!')
      return
    }
    if(this.state.credentials.password.length < 5){
      toastr.warning('Please select a Password over 5 Characters')
      return
    }
    if(this.state.credentials.team.length == 0){
      toastr.warning('Choose a Team Please!')
      return
    }
    event.preventDefault()
    console.log('register: ' + JSON.stringify(this.state.credentials))
    this.props.onRegister(this.state.credentials)
  }



    render() {
        return (
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


        )
    }
}

export default SignUp
