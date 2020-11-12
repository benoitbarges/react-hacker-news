import React from 'react'
import { fetchTopPosts, fetchUser } from '../utils/api'
import PostsList from './PostsList'
import User from './User'
import Loading from './Loading'

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
    const { posts, loading, user } = this.state

    if (loading) {
      return <Loading />
    }

    if (user) {
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
        <PostsList posts={posts} setUser={(user) => this.setUser(user)} />
      </div>
    )
  }
}

