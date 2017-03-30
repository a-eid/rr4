import React , {Component} from 'react'
import {BrowserRouter as Router , Route , NavLink , Prompt} from 'react-router-dom'




const Home = ()=> <h2>Home</h2>

class Form extends Component{
  constructor(props){
    super(props)
    this.state = {
      dirty: false 
    }
  }

  setDirty = (e) => {
    // console.log(e.target.value.length)
    this.setState({
      dirty: e.target.value.length > 0 ? true : false 
    })
  }

  render = () => 
    <div>
      <input type="text" onChange={this.setDirty}/>
      {console.log(this.state.dirty)}
      <Prompt message="date will be lost continue?" when={this.state.dirty} />
    </div>
}


const App = () => 
  <Router>
    <div>
      <nav>
        <NavLink exact to='/'>Home</NavLink>
        <NavLink exact to='/form'>Form</NavLink>
      </nav>
      <Route exact path='/' component={Home} />
      <Route path='/form' component={Form} />
    </div>
  </Router>

export default App 



