import React from 'react'

export default function Post({ author, title, created, comments, url, setUser}) {

  const date = new Date(created * 1000).toLocaleDateString("en-US", {
    hour: 'numeric' ,
    minute: 'numeric'
  })

  return (
    <div className='post'>
      <a href={url} className='link' onClick={setUser}>
        {title}
      </a>
      <div className='meta-info-light'>
        <span>by <a href="#">{author}</a></span>
        <span> on {date} </span>
        <span>with {comments} comments</span>
      </div>
    </div>
  )
}
