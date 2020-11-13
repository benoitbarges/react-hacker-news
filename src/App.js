import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Loading from './components/Loading'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/theme'

const Posts = React.lazy(() => import('./components/Posts'))
const Post = React.lazy(() => import('./components/Post'))
const User = React.lazy(() => import('./components/User'))

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
        <ThemeProvider value={this.state}>
          <div id="App" className={this.state.theme}>
            <div  className='container'>
              <Nav />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route exact path='/' render={() => <Posts type='top'/>}/>
                  <Route exact path='/new' render={() => <Posts type='new'/>}/>
                  <Route path='/user' component={User} />
                  <Route path='/post' component={Post} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
