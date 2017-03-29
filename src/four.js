import React from 'react'
import {BrowserRouter as Router , Route , NavLink } from 'react-router-dom'
// replace => restore prev history entry with this one . 

const Home = ()=> <h1>Home</h1>
const About = ()=> <h1>About</h1>
const AboutUs = ()=> <h1>About Us</h1>
// {match} , match.params.... 
// to make it optional add ? 
// react?-router  -> react is optional and router is not . 

const App = (props)=>(
  <Router>
    <div>
      <Route path='/:page?' render={({match})=> <h2>{match.params.page || "home"}</h2>} />
    </div>
  </Router>
)
export default App