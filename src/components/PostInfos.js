import React from 'react'
import PropTypes from 'prop-types'
import formateDate from '../utils/formateDate'
import { Link } from 'react-router-dom'

export default function PostInfos({ author, title, created, comments, url, setUser, id}) {
  return (
      <div className='meta-info-light'>
        <span>by <Link to={`/user?id=${author}`}>{author}</Link></span>
        <span> on {formateDate(created)} </span>
        <span>with <Link to={`/post?id=${id}`}>{comments} comments</Link></span>
      </div>
  )
}

PostInfos.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired
}
