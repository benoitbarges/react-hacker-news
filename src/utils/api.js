export const fetchTopPosts = () => {
  return fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
    .then(response => response.json())
    .then(ids => ids.slice(0, 10))
    .then(ids => Promise.all(ids.map(id => fetchPost(id))))
}

const fetchPost = (postId) => {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${postId}.json?print=pretty`)
    .then(response => response.json())
    .then(post => post)
}
