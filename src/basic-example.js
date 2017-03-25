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
    <ul>
      <li><Link to={`${match.url}/some-topic-one`}>Some Topic one</Link></li>
      <li><Link to={`${match.url}/some-topic-two`}>Some Topic two</Link></li>
      <li><Link to={`${match.url}/some-topic-three`}>Some Topic three</Link></li>
      <li><Link to={`${match.url}/some-topic-four`}>Some Topic four</Link></li>
    </ul>
    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={`${match.url}`} render={()=> <h4>choose somethind</h4>}/>
  </div>
)

const Topic = ({match}) => (
  <div>
    <h2>Topic</h2>
    <p>{match.params.topicId}</p>
  </div>
)

export default BasicExample
