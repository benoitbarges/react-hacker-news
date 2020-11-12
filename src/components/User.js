import React from 'react'
import formateDate from '../utils/formateDate'
import PostsList from './PostsList'
import { fetchPosts } from '../utils/api'

export default class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      loading: true
    }
  }

  componentWillMount() {
    const { posts } = this.props
    fetchPosts(posts).then(data => this.setState({ posts: data, loading: false }))
  }

  render() {
    const { username, created, karma } = this.props
    const { posts, loading } = this.state

    if (loading) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
        <h1 className='header'>
          {username}
        </h1>
        <div className='meta-info-light'>
          <span>joined <b>{formateDate(created)}</b> </span>
          <span>has <b>{karma}</b> karma </span>
        </div>
        <h2>Posts</h2>
        {posts &&
          <PostsList posts={posts} />
        }
        {posts &&
          <pre>{JSON.stringify(posts, null, 2)}</pre>
        }
      </div>
    )
  }
}
