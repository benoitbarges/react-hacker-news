import React from 'react'
import { Link } from 'react-router-dom'
import formateDate from '../utils/formateDate'
import PropTypes from 'prop-types'
import { ThemeConsumer } from '../contexts/theme'

export default function Comment({ author, content, created}) {
  return (
    <ThemeConsumer>
      {({ theme }) => (
        <div className='comment'>
          <div className={`meta-info-${theme}`}>
            <span>by <Link to={`/user?id=${author}`}>{author}</Link></span>
            <span> on {formateDate(created)} </span>
            <p dangerouslySetInnerHTML={{__html: content}} />
          </div>
        </div>
      )}
    </ThemeConsumer>
  )
}

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created: PropTypes.number.isRequired
}
