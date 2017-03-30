import React from 'react'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'

let Nav = () =>
  <nav>
    <NavLink exact to='/Home'>Home</NavLink>
    <NavLink to='/About'>About</NavLink>
    <NavLink to='/Contact'>Contact</NavLink>
    <NavLink to='/Portfolio'>Portfolio</NavLink>
  </nav>

// render multiple components for the same route
const Header = () =>
  <div>
    <Route path='/:page' render={({match}) => <h2>{match.params.page} header</h2>} />
  </div>

const Content = () =>
  <div>
    <Route path='/:page' render={({match}) => <h2>{match.params.page} content</h2>} />
  </div>

const App = () => (
  <Router>
    <div>
      <Nav />
      <Header />
      <Content />
    </div>
  </Router>
)

export default App
