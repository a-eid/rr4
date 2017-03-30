import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

const Home = () => <h1>Home</h1>
const About = () => <h1>About</h1>
// const AboutUs = () => <h1>About Us</h1>

const App = () => (
  <Router>
    <div>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/about/us' render={() => <h2>About us</h2>} />
      <Route path='/about/me' children={({match}) => match && <h2>About me</h2>} />
    </div>
  </Router>
)

export default App
