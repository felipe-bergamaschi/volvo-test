'use client'

import { Box } from '@mui/material'
import Image from 'next/image'

export function Header() {
  return (
    <Box
      width='100%'
      height='64px'
      display='flex'
      justifyContent='center'
      alignItems='center'
    >
      <Image
        alt="Logo"
        src="/logo.svg"
        width={114}
        height={48}
      />
    </Box>
  )
}