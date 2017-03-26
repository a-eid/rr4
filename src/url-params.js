import React from 'react'
import {BrowserRouter as Router , Link , Route} from 'react-router-dom'

const UP = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">non</Link></li>
        <li><Link to="/one">one</Link></li>
        <li><Link to="/two">two</Link></li>
        <li><Link to="/three">three</Link></li>
      </ul>
      <Route path="/:id" component={Child} />
      <Route exact path="/" render={()=> <h2>whatever</h2> } />
    </div>
  </Router>
)

const Child = ({match}) => (
  <h2>{match.params.id}</h2>
)

export default  UP