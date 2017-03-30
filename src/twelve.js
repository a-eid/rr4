import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Redirect} from 'react-router-dom'

const Nav = () =>
  <nav>
    <NavLink exact to='/'>Home</NavLink>
    <NavLink to='/old'>Old</NavLink>
    <NavLink to='/new'>New</NavLink>
    <NavLink to='/protected'>Protected area</NavLink>
  </nav>

const Home = () =>
  <div>
    <h2>Home</h2>
  </div>

// const Old = () =>
//   <div>
//     <h2>Old</h2>
//   </div>

const New = () =>
  <div>
    <h2>New</h2>
  </div>

// const App = ()=>
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/new" component={New} />
//           <Redirect from="/old" to="/new" />
//         </Switch>
//       </div>
//     </Router>

const Login = () => <h2>Login first</h2>
const Protected = () => <h2>you are in</h2>
const loggedin = false

const App = () =>
  <Router>
    <div>
      <Nav />
      <Route exact path='/' component={Home} />
      <Route path='/new' component={New} />
      <Route path='/login' component={Login} />
      <Route path='/old' render={() => <Redirect to='/new' />} />
      <Route path='/protected' render={() =>
            loggedin ? <Protected /> : <Redirect to='/login' />
          } />
    </div>
  </Router>

export default App
