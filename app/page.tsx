'use client'

import { Header } from '@/components/header'
import { Button, Box } from '@mui/material'

export default function Home() {
  return (
    <Box>
      <Header />

      <Button variant="contained" color="primary">
        Hello World
      </Button>
    </Box>
  )
}
