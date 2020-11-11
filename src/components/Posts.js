import React from 'react'
import { fetchTopPosts, fetchPost } from '../utils/api'
import Post from './Post'

export default class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: [],
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
              <pre>{JSON.stringify(posts, null, 2)}</pre>
            )
          })}
        </ul>
      </div>
    )
  }
}

