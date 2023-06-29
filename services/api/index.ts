import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'

console.log('baseURL', baseURL)

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json'
  }
})

