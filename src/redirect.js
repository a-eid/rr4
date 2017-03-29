import React from 'react'
import {BrowserRouter as Router , Route , Link , withRouter } from 'react-router-dom'
// routes are case sensative by default . 
const R = ()=>(
  <Router>
    <div>
      <AuthButton />
      <ul>
        <li><Link to="/public" >public page</Link></li>
        <li><Link to="/private">private page</Link></li>
      </ul>
        <Route path='/public' component={Public} />
        <Route path='/private' component={Private} />
    </div>
  </Router>
)

const Public = ()=>(
  <h1>Public</h1>
)
const Private = ()=>(
  <h1>Private</h1>
)


const fakeAuth = {
  // not logged in by default 
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

// what ? 
const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'))
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in <button onClick={() => {
        fakeAuth.authenticate(() => history.push('/'))
      }}>Sign in</button></p>
  )
))


export default R