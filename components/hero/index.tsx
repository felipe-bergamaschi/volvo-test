import { Box, Typography, Button, Stack } from '@mui/material'

export function Hero() {
  return (
    <Box
      width='100%'
      height='650px'
      position='relative'
      sx={{
        '& video': {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }
      }}
    >
      <video
        autoPlay
        muted
        loop
        poster='/img/hero.jpg'
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <Stack
        spacing={2}
        position='absolute'
        top='0'
        left='0'
        width='100%'
        height='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
      >
        <Typography variant='body1' color='white' fontWeight={500}>
          A grandiosidade do nosso menor SUV
        </Typography>

        <Typography variant='h4' component='h1' color='white' fontWeight={500}>
          EX30
        </Typography>

        <Button
          variant='contained'
          color='inherit'
          size='large'
          sx={{
            bgcolor: 'white',
            height: '48px',
            boxShadow: 'none !important',
          }}
        >
          Saiba mais
        </Button>
      </Stack>
    </Box>
  )
}