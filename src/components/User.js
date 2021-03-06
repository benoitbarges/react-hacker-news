import React from 'react'
import formateDate from '../utils/formateDate'
import PostsList from './PostsList'
import Loading from './Loading'
import { fetchPosts, fetchUser } from '../utils/api'
import queryString from 'query-string'
import { ThemeConsumer } from '../contexts/theme'

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
      this.setState({ user: data })
      return fetchPosts(data.submitted)
    })
      .then(posts => this.setState({ posts, loading: false }))
  }

  render() {
    const { posts, loading, user } = this.state

    if (loading) {
      return <Loading text='Fetching User'/>
    }

    return (
      <ThemeConsumer>
        {({ theme }) => (
          <div>
            <h1 className='header'>
              {user.id}
            </h1>
            <div className={`meta-info-${theme}`}>
              <span>joined <b>{formateDate(user.created)}</b> </span>
              <span>has <b>{user.karma}</b> karma </span>
            </div>
            <h2>Posts</h2>
            {posts
              ? <PostsList posts={posts} />
              : <Loading text='Fetching Posts' />
            }
          </div>
        )}
      </ThemeConsumer>
    )
  }
}
