'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Button, Box } from '@mui/material'

export default function Home() {
  return (
    <Box>
      <Header />

      <Hero />

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Box>
  )
}
