import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const create = async (title, author, url) => {
  
  const config = {
    headers: { 'Authorization': token }
  }

  const blog = {
    title,
    author,
    url
  }
  const response = await axios.post(baseUrl, blog, config)
  
}

const updateLikes = async (title, author, url, user,likes, id) => {
  
  const config = {
    headers: { 'Authorization': token }
  }
  likes = likes + 1
  const blog = {
    title,
    author,
    url,
    user,
    likes
  }
  const puturl = `${baseUrl}/${id}`
  const response = await axios.put(puturl, blog, config)
  return response
}

const deleteBlog = async (id) => {
  
  const config = {
    headers: { 'Authorization': token }
  }
  const deleteurl = `${baseUrl}/${id}`
  const response = await axios.delete(deleteurl, config)
  return response
}

export default { getAll, create, setToken, updateLikes, deleteBlog }