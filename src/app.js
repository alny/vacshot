import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Home, Main, Split, Details } from './components/layouts/'
import { VideoLarge, addTutorial } from './components/views/'
import { Frag, topRated, Profile, tutorialOverview, teams, team, addTutorialContainer, maps, map, SubmitFragContainer } from './components/containers/'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import store from './store'

const app = (
  <Provider store = { store.configureStore() }>

      <Router history={browserHistory}>

        <Route path="/" component={Main}>
          <IndexRoute component={Home}></IndexRoute>
            <Route path="/top-rated" component={topRated}></Route>
            <Route path="/tutorials" component={Split}></Route>
            <Route path="/tutorial-overview" component={tutorialOverview}></Route>
            <Route path="/community" component={Split}></Route>
            <Route path="/signup" component={Split}></Route>
            <Route path="/login" component={Split}></Route>
            <Route path="/submit" component={SubmitFragContainer}></Route>
            <Route path="/profile/:createdBy" component={Split}></Route>
            <Route path="/frag/:slug" component={Frag}></Route>
            <Route path="/teams" component={teams}></Route>
            <Route path="/team" component={team}></Route>
            <Route path="/maps" component={maps}></Route>
            <Route path="/map" component={map}></Route>
            <Route path="/add-tutorial" component={addTutorialContainer}></Route>

        </Route>

      </Router>



    </Provider>
)
ReactDOM.render(app, document.getElementById('root'))
