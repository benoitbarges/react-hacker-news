import React from 'react'
import PostInfos from './PostInfos'
import Loading from './Loading'
import Comment from './Comment'
import queryString from 'query-string'
import { fetchPost, fetchComments } from '../utils/api'

export default class Post extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      post: null,
      loadingPost: true,
      loadingComments: true,
      comments: null
    }
  }

  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search)
    fetchPost(id).then((data) => {
      this.setState({ post: data, loadingPost: false })
      return fetchComments(data.kids || [])
    })
      .then(comments => this.setState({ comments, loadingComments: false }))
  }

  render() {
    const { post, loadingPost, loadingComments, comments } = this.state
    console.log(comments)

    return (
      <React.Fragment>
        {loadingPost === true
          ? <Loading />
          : <React.Fragment>
              <h1 className='header'>
                <a href={post.url} target='_blank' rel="noreferrer" className='link'>
                  {post.title}
                </a>
              </h1>
              <PostInfos
                title={post.title}
                author={post.by}
                comments={post.descendants}
                created={post.time}
                id={post.id}
              />
            </React.Fragment>}
        {loadingComments === true
          ? loadingPost === false && <Loading text='Fetching comments' />
          : <React.Fragment>
              {comments.map((comment) =>
                <Comment
                  author={comment.by}
                  content={comment.text}
                  created={comment.time}
                />
              )}
            </React.Fragment>}
      </React.Fragment>
    )
  }
}
