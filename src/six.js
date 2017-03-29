import React from 'react'
import {BrowserRouter as Router , Route , NavLink , Link } from 'react-router-dom'
// query strings in react-router-4 
const Home = ({match , location})=> {
  return(
    <div>
      {console.log(JSON.stringify(match))}
      {console.log(JSON.stringify(location))}
      {console.log(new URLSearchParams(location.search).get('q'))}
      <h2>Home</h2>
    </div>
  )
}
const About = ()=> <h1>About</h1>
const AboutUs = ()=> <h1>About Us</h1>
// {match} , match.params.... 
// to make it optional add ? 
// react?-router  -> react is optional and router is not . 

let links = (
  <nav>
    <Link to="/?q=123">Literal</Link>
    <Link to={{pathname:'/about'}}> Object</Link>
  </nav>
) 

const App = (props)=>(
  <Router>
    <div>
      {links}
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)
export default App