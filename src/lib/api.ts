import axios from 'axios'

const api = axios.create({
  baseURL: 'http://simcc.uesc.br/v3/api/'
})

export default api 