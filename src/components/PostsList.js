import React from 'react'
import PostInfos from './PostInfos'
import PropTypes from 'prop-types'

export default function PostsList({ posts }) {

  if (posts.length === 0) {
      return (
        <h2 className='center-text'>
          This user doesn't have any post
        </h2>
      )
    }

  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className='post'>
            <a href={post.url} target='_blank' rel="noreferrer" className='link'>
              {post.title}
            </a>
            <PostInfos
              title={post.title}
              author={post.by}
              comments={post.descendants}
              created={post.time}
              id={post.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

PostsList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired
}
