import React from 'react'
import { Link } from 'react-router-dom'
import formateDate from '../utils/formateDate'

export default function Comment({ author, content, created}) {
  return (
    <div className='comment'>
      <div className='meta-info-light'>
        <span>by <Link to={`/user?id=${author}`}>{author}</Link></span>
        <span> on {formateDate(created)} </span>
        <p dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </div>
  )
}
