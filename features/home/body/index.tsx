import { ICar } from '@/types'
import { Container, Stack, Typography } from '@mui/material'

import { CarList } from '../carList';
import { SessionWhyAVolvo } from '../sessionWhyAVolvo';

interface IBodyProps {
  data: ICar[] | null
}

export function Body({ data }: IBodyProps) {
  if (!data) return (
    <Container>
      <Typography variant='h4' fontWeight={500} fontSize={32}>
        Ihhhh deu merda!
      </Typography>
    </Container>
  )

  return (
    <Container sx={{ maxWidth: '1260px !important' }}>
      <Stack spacing={8}>
        <Stack spacing={4} alignItems='center'>
          <Typography variant='h4' fontWeight={500} fontSize={32}>
            Todos os modelos Recharge
          </Typography>

          {/* TODO: coloca um slide */}
          <Stack
            spacing={2}
            direction='row'
            width={'100%'}
            overflow={'hidden'}
            sx={{
              overflowX: 'auto',
            }}
          >
            {data.map((car) => (
              <CarList data={car} />
            ))}
          </Stack>
        </Stack>

        <SessionWhyAVolvo />
      </Stack>
    </Container>
  )
}