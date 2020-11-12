export const fetchMainPosts = (type) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
    .then(response => response.json())
    .then(ids => ids.slice(0, 30))
    .then(ids => Promise.all(ids.map(id => fetchPost(id))))
}

export const fetchPost = (postId) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`)
    .then(response => response.json())
    .then(post => post)
}

export const fetchPosts = (posts) => {
  return Promise.all(posts.slice(0, 20).map(post => fetchPost(post)))
    .then(data => data.filter(({ type }) => type === 'story'))
    .then(data => data.filter(({ dead }) => dead !== true))
}

export const fetchUser = (user) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/user/${user}.json?print=pretty`)
    .then(response => response.json())
    .then(user => user)
}

export const fetchComments = (ids) => {
  return Promise.all(ids.slice(0, 50).map(id => fetchPost(id)))
    .then(data => data.filter(({ type }) => type === 'comment'))
    .then(data => data.filter(({ dead }) => dead !== true))
}
