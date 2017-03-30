import React from 'react'
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
// replace => restore prev history entry with this one .

const Links = (
  <nav>
    {/* gives it a class of active if its the route in the url */}
    <NavLink exact activeClassName='active' to='/'>Home</NavLink>
    <NavLink exact to='/about'>About</NavLink>
    <NavLink exact to={{ pathname: '/about/us' }}>About us</NavLink>
    <NavLink exact replace activeStyle={{color: 'green'}}
      isActive={(match, location) => { console.log(match, location) }} to='/about/me'>About me</NavLink>
  </nav>
)

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
// const AboutUs = () => <h1>About Us</h1>

const App = () => (
  <Router>
    <div>
      {Links}
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/about/us' render={() => <h2>About us</h2>} />
      <Route path='/about/me' children={({match}) => match && <h2>About me</h2>} />
    </div>
  </Router>
)
export default App
