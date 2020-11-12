import React from 'react'
import Post from './Post'

export default function PostsList({ posts, setUser}) {
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
              setUser={() => setUser(post.by)}
            />
          </li>
        )
      })}
    </ul>
  )
}
