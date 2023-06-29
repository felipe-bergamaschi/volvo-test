import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_SERVER_BASE_URL || 'http://localhost:3000'

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

