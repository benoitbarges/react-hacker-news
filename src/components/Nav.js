import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
  color: 'rgb(187, 46, 31)'
}

export default class Nav extends React.Component {
  render() {
    return (
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
      </nav>
    )
  }
}
