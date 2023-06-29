import { ICar } from '@/types';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ArrowForwardIosRounded } from '@mui/icons-material';

interface ICarListProps {
  data: ICar
}

export function CarList({ data: car }: ICarListProps) {
  return (
    <Stack
      sx={{
        '.MuiCardContent-root:hover': {
          '& .MuiTypography-root': {
            color: 'primary.main',
          },
          '& .MuiCardMedia-root': {
            transform: 'scale(1.08)',
          }
        }
      }}
    >
      <CardContent
        sx={{
          minWidth: 290,
          cursor: 'pointer',
          p: 0,
        }}
      >
        <Typography
          sx={{ fontSize: 12 }}
          color="text.secondary"
          fontWeight={700}
          textTransform={'uppercase'}
        >
          {car.bodyType}
        </Typography>

        <Stack
          direction='row'
          spacing={0.5}
          mb={2}
        >
          <Typography sx={{ fontSize: 16 }} fontWeight={500}>
            {car.modelName}
          </Typography>

          <Typography
            sx={{ fontSize: 16 }}
            fontWeight={400}
            color="text.secondary"
            textTransform='capitalize'
          >
            {car.modelType}
          </Typography>
        </Stack>

        <Box
          width='100%'
          height='220px'
          overflow='hidden'
        >
          <CardMedia
            component="img"
            height="220"
            image={`/img/${car.imageUrl}`}
            alt="Imagem do carro"
            sx={{
              transition: 'all 0.3s ease-in-out',
              transform: 'scale(1.01)',
            }}
          />
        </Box>
      </CardContent>

      <Stack
        direction='row'
        spacing={2}
        justifyContent='center'
        mt={2}
        mb={4}
      >
        <Button
          endIcon={<ArrowForwardIosRounded sx={{ fontSize: '12px !important' }} />}
          sx={{
            fontWeight: 700,
          }}
        >
          Conheça
        </Button>

        <Button
          endIcon={<ArrowForwardIosRounded sx={{ fontSize: '12px !important' }} />}
          sx={{
            fontWeight: 700,
          }}
        >
          Comprar
        </Button>
      </Stack>
    </Stack>
  )
}