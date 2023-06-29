'use client'

import { Body } from '@/components/body'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { useCars } from '@/query/useCars'
import { Box } from '@mui/material'

export default function Home() {
  const { isLoading, error, data } = useCars()

  console.log({ isLoading, error, data })

  if (error) {
    return (
      <div>
        deu erro
      </div>
    )
  }

  return (
    <Box>
      <Header />

      <Hero />

      {/* TODO: faz um loading descente por favor */}
      {isLoading ? (
        <div>
          loading
        </div>
      ) : (
        <Body data={data} />
      )}
    </Box>
  )
}
