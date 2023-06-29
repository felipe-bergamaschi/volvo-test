import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Box } from '@mui/material'

interface ICommonLayoutProps {
  children: React.ReactNode
}

export function CommonLayout({ children }: ICommonLayoutProps) {
  return (
    <Box>
      <Header />

      {children}

      <Footer />
    </Box>
  )
}