import React from 'react'
import formateDate from '../utils/formateDate'
import PostsList from './PostsList'
import Loading from './Loading'
import { fetchPosts, fetchUser } from '../utils/api'
import queryString from 'query-string'

export default class User extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      loading: true,
      user: null
    }
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)
    fetchUser(id).then((data) => {
      this.setState({ user: data, loading: false })
      return fetchPosts(data.submitted)
    })
      .then(posts => this.setState({ posts }))
  }

  render() {
    const { posts, loading, user } = this.state

    if (loading) {
      return <Loading text='Fetching User'/>
    }

    return (
      <div>
        <h1 className='header'>
          {user.id}
        </h1>
        <div className='meta-info-light'>
          <span>joined <b>{formateDate(user.created)}</b> </span>
          <span>has <b>{user.karma}</b> karma </span>
        </div>
        <h2>Posts</h2>
        {posts
          ? <PostsList posts={posts} />
          : <Loading text='Fetching Posts' />
        }
      </div>
    )
  }
}
