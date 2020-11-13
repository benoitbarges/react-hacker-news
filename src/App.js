import React from 'react'
import './App.css';
import Posts from './components/Posts'
import Nav from './components/Nav'
import User from './components/User'
import Post from './components/Post'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: 'light',
      toggleTheme: () => {
        this.setState(({ theme }) => ({ theme: theme === 'light' ? 'dark' : 'light' }))
      }
    }
  }

  render () {
    return (
      <Router>
        <ThemeProvider>
          <div id="App" className='light'>
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
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
