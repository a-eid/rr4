import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom'

const Nav = () =>
  <nav>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink to='/main'>Main</NavLink>
  </nav>

const Main = ({match}) =>
  <div>
    <p>Main</p>
    <nav>
      <Link to='/main/x'>x</Link>
      <Link to='/main/y'>y</Link>
    </nav>
    <Route path='/main/x' render={() => <h2>x</h2>} />
    <Route path='/main/y' render={() => <h2>y</h2>} />
  </div>

const Home = ({match}) =>
  <div>
    <p>Home</p>
  </div>

const App = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/main' component={Main} />
    </div>
  </Router>
)

export default App
