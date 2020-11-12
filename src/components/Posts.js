import React from 'react'
import { fetchTopPosts, fetchUser } from '../utils/api'
import Post from './Post'
import User from './User'

export default class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      loading: true,
      user: null
    }
  }

  componentDidMount() {
    fetchTopPosts().then(data => this.setState({ posts: data, loading: false, user: null }))
  }

  setUser = (user) => {
    fetchUser(user).then(data => this.setState({ posts: null, loading: false, user: data }))
  }

  render() {
    const { posts, loading } = this.state

    if (loading) {
      return <h1>Loading...</h1>
    }

    if (this.state.user) {
      const { user } = this.state
      return (
        <User
          username={user.id}
          created={user.created}
          karma={user.karma}
          posts={user.submitted}
        />
      )
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
                  setUser={() => this.setUser(post.by)}
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

