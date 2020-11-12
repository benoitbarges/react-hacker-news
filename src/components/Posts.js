import React from 'react'
import { fetchMainPosts } from '../utils/api'
import PostsList from './PostsList'
import Loading from './Loading'
import PropTypes from 'prop-types'

export default class Posts extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: null,
      loading: true,
    }
  }

  componentDidMount() {
    fetchMainPosts(this.props.type).then(data => this.setState({ posts: data, loading: false }))
  }

  render() {
    const { posts, loading } = this.state

    if (loading) {
      return <Loading />
    }

    return (
      <div>
        <PostsList posts={posts}/>
      </div>
    )
  }
}

Posts.propTypes = {
  type: PropTypes.string.isRequired
}
