import React from 'react'
import PropTypes from 'prop-types'
import formateDate from '../utils/formateDate'
import { Link } from 'react-router-dom'

export default function Post({ author, title, created, comments, url, setUser}) {
  return (
    <div className='post'>
      <a href={url} target='_blank' rel="noreferrer" className='link'>
        {title}
      </a>
      <div className='meta-info-light'>
        <span>by <Link to={`/user?id=${author}`}>{author}</Link></span>
        <span> on {formateDate(created)} </span>
        <span>with {comments} comments</span>
      </div>
    </div>
  )
}

Post.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}
