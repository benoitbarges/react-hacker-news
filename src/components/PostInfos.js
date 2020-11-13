import React from 'react'
import PropTypes from 'prop-types'
import formateDate from '../utils/formateDate'
import { Link } from 'react-router-dom'
import { ThemeConsumer } from '../contexts/theme'

export default function PostInfos({ author, title, created, comments, id}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className={`meta-info-${theme}`}>
          <span>by <Link to={`/user?id=${author}`}>{author}</Link></span>
          <span> on {formateDate(created)} </span>
          {<span>with <Link to={`/post?id=${id}`}>{comments} comments</Link></span>}
        </div>
      )}
    </ThemeConsumer>
  )
}

PostInfos.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired,
  comments: PropTypes.number,
  id: PropTypes.number
}
