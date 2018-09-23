import axios from 'axios'
const baseUrl = '/api/login'

const login = async (username, password) => {
  const data = {
    username,
    password
  }
  const response = await axios.post(baseUrl, data)
  const user = {
    username: response.data.username,
    name: response.data.name,
    token: response.data.token
  }
  console.log(response)
  return user
}

export default {login}