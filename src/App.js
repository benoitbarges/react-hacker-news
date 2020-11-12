import './App.css';
import Posts from './components/Posts'
import Nav from './components/Nav'
import User from './components/User'
import Post from './components/Post'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div id="App">
        <div  className='container'>
          <Nav />
          <Switch>
            <Route exact path='/' component={() => <Posts type='top'/>}/>
            <Route exact path='/new' component={() => <Posts type='new'/>}/>
            <Route path='/user' component={User} />
            <Route path='/post' component={Post} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
