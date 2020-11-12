import React from 'react'
import PostInfos from './PostInfos'
import Loading from './Loading'
import queryString from 'query-string'
import { fetchPost, fetchComments } from '../utils/api'

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null,
      loading: true,
      comments: null
    }
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)
    fetchPost(id).then((data) => {
      this.setState({ post: data, loading: false })
      return fetchComments(data.kids)
    })
      .then(comments => this.setState({ comments}))
  }

  render() {
    const { post, loading } = this.state

    if(loading) {
      return <Loading />
    }

    return (
      <div className='post'>
        <h1 className='header'>
          <a href={post.url} target='_blank' rel="noreferrer" className='link'>
            {post.title}
          </a>
        </h1>
        <PostInfos
          title={post.title}
          url={post.url}
          author={post.by}
          comments={post.descendants}
          created={post.time}
          id={post.id}
        />
      </div>
    )
  }
}
