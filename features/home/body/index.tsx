import { ICar } from '@/types'
import { Container, Stack, Typography } from '@mui/material'

import { CarList } from '../carList';
import { SessionWhyAVolvo } from '../sessionWhyAVolvo';
import { Slider } from '@/components/slider';

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

          <Slider>
            {data.map((car) => (
              <CarList data={car} />
            ))}
          </Slider>
        </Stack>

        <SessionWhyAVolvo />
      </Stack>
    </Container>
  )
}