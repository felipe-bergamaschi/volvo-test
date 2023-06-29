import { ICar } from '@/types'
import { Container, Stack } from '@mui/material'

import { CarList } from '../carList';
import { SessionWhyAVolvo } from '../sessionWhyAVolvo';
import { Slider } from '@/components/slider';
import { Text } from '@/components/text';

interface IBodyProps {
  data: ICar[] | null;
  isLoading: boolean;
}

export function Body({ data, isLoading }: IBodyProps) {
  return (
    <Container sx={{ maxWidth: '1260px !important' }}>
      <Stack spacing={8}>
        <Stack spacing={4} alignItems='center'>
          <Text variant='title'>
            Todos os modelos Recharge
          </Text>

          {isLoading ? (
            <Text variant='body'>
              Carregando...
            </Text>
          ) : (
            <Slider>
              {data ? data.map((car) => (
                <CarList data={car} />
              )) : (
                <Text variant='body'>
                  Um erro ocorreu ao carregar os carros, tente recarregar a página
                </Text>
              )}
            </Slider>
          )}
        </Stack>
        <SessionWhyAVolvo />
      </Stack>
    </Container>
  )
}