import React from 'react'
import { fetchTopPosts } from '../utils/api'
import Post from './Post'

export default class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      loading: true
    }
  }

  componentDidMount() {
    fetchTopPosts().then(data => this.setState({ posts: data, loading: false }))
  }

  render() {
    const { posts, loading } = this.state

    if (loading) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
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
          <pre>{JSON.stringify(posts, null, 2)}</pre>
      </div>
    )
  }
}

