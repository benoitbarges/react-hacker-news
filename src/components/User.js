import React from 'react'
import formateDate from '../utils/formateDate'

export default function User({ username, created, karma, posts }) {
  return (
    <div>
      <h1 className='header'>
        {username}
      </h1>
      <div className='meta-info-light'>
        <span>joined <b>{formateDate(created)}</b> </span>
        <span>has <b>{karma}</b> karma </span>
      </div>
    </div>
  )
}
