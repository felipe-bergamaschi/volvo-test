import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://volvo-test-five.vercel.app',
  headers: {
    'Content-Type': 'application/json'
  }
})

