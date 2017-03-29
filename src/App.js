import React , {Component} from 'react' 
import {BrowserRouter as Router , Route , NavLink } from 'react-router-dom'


const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>           
    <NavLink to='/about'>about</NavLink>           
    <NavLink to='/contact'>contact</NavLink>           
  </nav>
)

export default class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Nav />
          <Route exact path="/" render ={({match})=> match &&  <Home />}/>
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}


const Home = ()=>(
  <h1> Home </h1>
)

const About = ()=>(
  <h1> About </h1>
)

const Contact = ()=>(
  <h1>Contact</h1>
)