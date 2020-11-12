export const fetchTopPosts = (type) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/${type}stories.json?print=pretty`)
    .then(response => response.json())
    .then(ids => ids.slice(0, 10))
    .then(ids => Promise.all(ids.map(id => fetchPost(id))))
}

const fetchPost = (postId) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`)
    .then(response => response.json())
    .then(post => post)
}

export const fetchPosts = (posts) => {
  return Promise.all(posts.map(post => fetchPost(post)))
    .then(data => data.filter(({ type }) => type === 'story'))
    .then(data => data.filter(({ dead }) => dead !== true))
}

export const fetchUser = (user) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/user/${user}.json?print=pretty`)
    .then(response => response.json())
    .then(user => user)
}
