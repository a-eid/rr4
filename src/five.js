import React from 'react'
import {BrowserRouter as Router , Route , NavLink } from 'react-router-dom'
// replace => restore prev history entry with this one . 
// react router with regexp

const Home = ()=> <h1>Home</h1>
const About = ()=> <h1>About</h1>
const AboutUs = ()=> <h1>About Us</h1>
// {match} , match.params.... 
// to make it optional add ? 
// react?-router  -> react is optional and router is not . 

const App = (props)=>(
  <Router>
    <div>
      {/* this is how you add validation in your urs with regexp  */}
      <Route path='/:a(\d+)/:b' render={({match})=> <h2>{match.params.a} {match.params.b}</h2>} />
    </div>
  </Router>
)
export default App