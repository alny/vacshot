import React, {Component} from 'react'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      credentials: {
        username: '',
        password: ''
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

  submitLogin(event){
    if(this.state.credentials.username.length == 0){
      toastr.warning('Enter a Username to Login Please!')
      return
  }
    if(this.state.credentials.password.length == 0){
      toastr.warning('Enter a Password to Login Please!')
      return
    }
    event.preventDefault()
    console.log('register: ' + JSON.stringify(this.state.credentials))
    this.props.onLogin(this.state.credentials)
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

                    <button onClick={this.submitLogin.bind(this)} className="btn btn-primary btn-block">Log In</button>


          </div>
        </div>

        )
    }
}

export default Login
