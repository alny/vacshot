import React, {Component} from 'react'

class SubmitFrag extends Component {
    constructor(){
      super()
      this.state = {
        frag: {
          url: '',
          category: ''
        }
      }
    }

    updateFrag(event){
      let updated = Object.assign({}, this.state.frag)
      event.preventDefault()
      updated[event.target.id] = event.target.value
      this.setState({
        frag: updated
      })
      console.log('updateFrag: ' + event.target.id + ' == ' + event.target.value)
    }

    submitFrag(event){
      if(this.state.frag.url.length == 0){
        toastr.warning('Please Insert a URL')
        return
      }
      // let str = "https://www.youtube.com/watch"
      // let n = this.state.frag.url.includes(str)

      if(this.state.frag.url.includes("https://www.youtube.com/watch") == false){
        toastr.warning('Insert a YouTube link please!')
        return
      }

      if(this.state.frag.category.length == 0){
        toastr.warning('Please select a Category')
        return
      }
      event.preventDefault()
      this.props.onSubmitFrag(this.state.frag)
      console.log('submitFrag: ' + JSON.stringify(this.state.frag))

    }

    render() {
        return (
          <div id="wrap">

            <div style={{background: '#ef5d2d'}} className="hero hero-blog">
              <div className="hero-inner group">
                <div className="hero-title">
                  <span className="pre-head">Add your craziest, most wacky</span>
                  <h1>VACshot</h1>
                </div>
              </div>
            </div>


            <div id="wrap-inner">
              <div id="content" role="main">

          <div className="constrained-content">
            <div id="main">
              <div className="copy framed under-hero">

          <div className="index blog-home">

          <div className="post group">
            <header>
              <p className="date">Please read the Guidelines at the right side, before filling in the form!</p>

              <h2><a href="#"></a></h2>

                <div className="teaser">
                  <form className="account gen-form with-messages">
                      <div className="form-field">
                          <fieldset className="user_url">
                              <label htmlFor="user_url">YouTube URL:</label><input onChange={this.updateFrag.bind(this)} placeholder="Copy/Paste your YouTube Link here" autoComplete="off" id="url" type="text"/></fieldset>
                          <p className="message">Example:<strong> https://www.youtube.com/watch?v=
                                  <span>dX25pCK5yow</span>
                              </strong>
                          </p>
                      </div>

                      <div className="form-field">
                          <fieldset className="user_url">
                          <label htmlFor="user_url">Category:</label>
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
                              <label>Guidelines and Rules Acceptance:</label>
                              <input type="hidden" value="0"/><input type="checkbox" id="checkedBox"/>
                              I Accept the Guidelines and Rules

                          </fieldset>
                      </div>

                      <div className="form-btns">
                          <input onClick={this.submitFrag.bind(this)} value="Add my VACshot" className="btn btn-primary btn-block"/>
                      </div>
                  </form>
                </div>
            </header>

              <p>OBS: Your submitted video won't be public before validated and accepted by our moderators!</p>
          </div>

          </div>

          <div className="page">

          </div>

              </div>
            </div>

            <div className="secondary">
            <div className="subscribe-to-notification"><h4>Rules and Guidelines</h4>

          <p>News, featured designs, and Courtside stories delivered to your inbox each week.</p>

          <a className="subscribe-btn" data-remote="true" rel="nofollow" data-method="post" href="/account/notifications?event=weekly_replay">
            <span>Subscribe</span>
          </a></div>


          <div className="section overtime">
            <h3>
              <a title="Dribbble’s audio companion. Our official podcast." href="/overtime">Rule #1</a>
              <span className="cat-desc">Only Add Video's performed by you.</span>
            </h3>


          </div>


          <div className="section ftw">
            <h3>
              <a title="Designers share their Dribbble success stories." href="/stories/categories/ftw">Rule #2</a>
              <span className="cat-desc">We only allow Video's from YouTube</span>
            </h3>

          </div>


          <div className="section timeout">
            <h3>
              <a title="Lightning-quick interviews with Dribbblers." href="/stories/categories/timeout">Rule #3</a>
              <span className="cat-desc">Interviews with designers</span>
            </h3>
          </div>


            <div className="section">
              <h3>Thanks for reading and understanding our guidelines!</h3>
            </div>
          </div>

          </div>






              </div>
            </div>
          </div>
        )
    }
}
export default SubmitFrag
