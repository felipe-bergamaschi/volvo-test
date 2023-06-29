import { Footer } from '@/components/footer'
import { Container, Box } from '@mui/material'

interface ICommonLayoutProps {
  children: React.ReactNode
}

export function CommonLayout({ children }: ICommonLayoutProps) {
  return (
    <Box>
      <Container sx={{ maxWidth: '1260px !important', p: 0 }}>
        {children}
      </Container>

      <Footer />
    </Box>
  )
}