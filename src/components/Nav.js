import React from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default class Nav extends React.Component {
  render() {
    return (
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <nav className='row space-between'>
            <ul className='row nav'>
              <li>
                <NavLink exact to='/' className='nav-link' activeStyle={activeStyle}>
                  Top
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/new' className='nav-link' activeStyle={activeStyle}>
                  New
                </NavLink>
              </li>
            </ul>
            <button
              className='btn-clear'
              style={{fontSize: 30}}
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🔦' : '💡'}
            </button>
          </nav>
        )}
      </ThemeConsumer>
    )
  }
}
