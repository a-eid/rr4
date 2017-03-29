import React from 'react'
import {BrowserRouter as Router , Route , NavLink , Switch} from 'react-router-dom'


let nav=(
  <nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/about">about</NavLink>
    <NavLink to="/search">search</NavLink>
    <NavLink to="/doesnotexist">what</NavLink>
  </nav>
)


const App=() => (
  <Router>
    <div>
      {nav}
      <Switch>
        <Route exact path="/" render={()=> <h2>home</h2>} />
        <Route path="/about" render={()=> <h2>about</h2>} />
        <Route path="/search" render={()=> <h2>search</h2>} />
        <Route path="" render={()=> <h2>Page not found</h2>} />
      </Switch>
    </div>
  </Router>
)

export default App 

