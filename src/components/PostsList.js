import React from 'react'
import Post from './Post'
import PropTypes from 'prop-types'

export default function PostsList({ posts, setUser = null}) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id} className='post'>
            <Post
              title={post.title}
              url={post.url}
              author={post.by}
              comments={post.descendants}
              created={post.time}
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
