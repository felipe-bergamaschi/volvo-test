import { Stack } from '@mui/material'
import { Text } from '../text'

export function Footer() {
  return (
    <Stack
      alignItems='center'
      spacing={1}
      sx={{
        p: 2,
        bgcolor: '#fafafa'
      }}
    >
      <Stack
        spacing={1}
        direction='row'
      >
        <Text variant='small'>Cookies</Text>
        <Text variant='small'>Legal</Text>
        <Text variant='small'>Privacy</Text>
        <Text variant='small'>Recalls</Text>
        <Text variant='small'>Etiqueta de segurança</Text>
        <Text variant='small'>Ofertas</Text>
      </Stack>

      <Text variant='small'>Copyright © 2023 Volvo Car Corporation</Text>
    </Stack>
  )
}