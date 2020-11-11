import React from 'react'

export default function Post({ author, title, created, comments, url}) {
  return (
    <div className='post'>
      <a href={url} className='link'>
        {title}
      </a>
    </div>
  )
}
