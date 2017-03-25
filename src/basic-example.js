import React from 'react'
import {BrowserRouter as Router , Route , Link} from 'react-router-dom'

const BasicExample = () => (
  <Router>
    <div>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
)

const Nav = () => (
  <div>
    <Link to="/" > Home </Link> 
    <Link to="/about" > About </Link>
    <Link to="/topics" > Topics </Link>
  </div>
)

const Home = () => (
  <h2>Home</h2>
)

const About = () => (
  <h2>About</h2>
)

const Topics = ({match}) => (
  <div>
    <h2>Topics {console.log(match)} </h2>
  </div>
)

const Topic = () => (
  <h2>Topic</h2>
)

export default BasicExample














