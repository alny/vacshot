import React, {Component} from 'react'

class AddTutorial extends Component {
    constructor(){
      super()
      this.state = {
        tutorial: {
          url: '',
          type: '',
          map: '',
          rifle: '',
          pistol: '',
          grenade: ''

        }
      }
    }

    updateTutorial(event){
      event.preventDefault()
      let updated = Object.assign({}, this.state.tutorial)
      updated[event.target.id] = event.target.value
      this.setState({
        tutorial: updated
      })
    }

    submitTutorial(event){
      event.preventDefault()
      this.props.onSubmitTutorial(this.state.tutorial)
    }

    render() {
        return (
            <div id="content" role="main">

                <div style={{marginLeft: '215px'}} className="constrained-content-alt">


                    <div id="main">
                      <img style={{marginLeft: '250px'}} src="images/vacshot-guy.png" alt=""/>

                        <form className="account gen-form with-messages">
                            <div className="form-field">
                                <fieldset className="user_url">
                                    <label htmlFor="user_url">YouTube URL</label><input onChange={this.updateTutorial.bind(this)} autoComplete="off" id="url" type="text"/></fieldset>
                                <p className="message">Example:<strong> https://www.youtube.com/watch?v=
                                        <span>dX25pCK5yow</span>
                                    </strong>
                                </p>
                            </div>

                            <div className="form-field">
                                <fieldset className="user_url">
                                <label htmlFor="user_url">Tutorial Type</label>
                                <select onChange={this.updateTutorial.bind(this)} id="type" style={{color: '#999', background: '#e4e4e4', height: '40px'}} className="form-control">
                                    <option disabled selected value>Find Your Type</option>
                                    <option value="map">Map Tutorial</option>
                                    <option value="grenade">Grenade Tutorial</option>
                                    <option value="weapon">Weapon Tutorial</option>
                                </select>
                                    </fieldset>
                                        <p className="message">Pick the right Type for your Video</p>
                            </div>

                            <div className="form-field">
                                <fieldset className="user_url">
                                <label htmlFor="user_url">Tutorial Map</label>
                                <select onChange={this.updateTutorial.bind(this)} id="map" style={{color: '#999', background: '#e4e4e4', height: '40px'}} className="form-control">
                                    <option disabled selected value>Find Your Map</option>
                                    <option value="dust2">Dust2</option>
                                    <option value="mirage">Mirage</option>
                                    <option value="cache">Cache</option>
                                    <option value="overpass">Overpass</option>
                                    <option value="inferno">Inferno</option>
                                    <option value="nuke">Nuke</option>
                                    <option value="train">Train</option>
                                  </select></fieldset>
                                <p className="message">Pick the right Map for your Video</p>
                            </div>

                            <div className="form-field">
                                <fieldset className="user_url">
                                <label htmlFor="user_url">Tutorial Pistol</label>
                                <select onChange={this.updateTutorial.bind(this)} id="pistol" style={{color: '#999', background: '#e4e4e4', height: '40px'}} className="form-control">
                                    <option disabled selected value>Find Your Pistol</option>
                                    <option value="cz75">CZ-75</option>
                                    <option value="deagle">Deagle</option>
                                    <option value="fiveseven">Five Seven</option>
                                    <option value="glock">Glock</option>
                                    <option value="usp">USP-S</option>
                                    <option value="P2000">P2000</option>
                                    <option value="p250">P250</option>
                                    <option value="scout">Tec-9</option>
                                    <option value="dualelite">Dual Elite</option>
                                </select></fieldset>
                              <p className="message">Pick the right Category for your Video</p>
                            </div>
                            <div className="form-field">
                                <fieldset className="user_url">
                                <label htmlFor="user_url">Tutorial Grenade</label>
                                <select onChange={this.updateTutorial.bind(this)} id="grenade" style={{color: '#999', background: '#e4e4e4', height: '40px'}} className="form-control">
                                    <option disabled selected value>Find Your Grenade</option>
                                    <option value="smoke">Smoke</option>
                                    <option value="flash">Flash</option>
                                    <option value="hegrenade">HE Grenade</option>
                                    <option value="molotov">Molotov</option>


                                </select></fieldset>
                              <p className="message">Pick the right Category for your Video</p>
                            </div>
                            <div className="form-field">
                                <fieldset className="user_url">
                                <label htmlFor="user_url">Tutorial Rifle</label>
                                <select onChange={this.updateTutorial.bind(this)} id="rifle" style={{color: '#999', background: '#e4e4e4', height: '40px'}} className="form-control">
                                    <option disabled selected value>Find Your Rifle</option>
                                    <option value="ak47">Ak-47</option>
                                    <option value="m4a1">M4A1-S</option>
                                    <option value="m4a4">M4A4</option>
                                    <option value="awp">AWP</option>
                                    <option value="aug">AUG</option>
                                    <option value="scout">Scout</option>
                                    <option value="scout">Scout</option>

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
                                <input onClick={this.submitTutorial.bind(this)} value="Submit" className="btn btn-primary btn-block"/>
                            </div>
                        </form>

                    </div>
                </div>

            </div>
        )
    }
}
export default AddTutorial
