import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Text } from '@/components/text';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export function SessionWhyAVolvo() {
  return (
    <Box
      sx={{
        width: '100%',
        bgcolor: '#fafafa',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px',
          py: 10,
        }}
      >
        <Text variant='title'>
          Por que um Volvo?
        </Text>

        <CardMedia
          component="img"
          width='100%'
          height="600"
          image='/img/why-a-volvo.jpg'
          alt="Imagem do carro"
          sx={{
            mt: 4,
          }}
        />

        <Grid
          container
          spacing={3}
          sx={{
            width: '100%',
            ml: 0,
            mt: 0,
          }}
        >
          <Grid xs>
            <Stack spacing={2}>
              <Text variant='subtitle'>
                Simplificando a sua vida
              </Text>

              <Text variant='body'>
                Nosso novo jeito de ir de A até B. Tenha o seu Volvo quando quiser, como quiser.
              </Text>
            </Stack>
          </Grid>

          <Grid xs>
            <Stack spacing={2}>
              <Text variant='subtitle'>
                O futuro é elétrico
              </Text>

              <Text variant='body'>
                Todos os nossos automóveis estão disponíveis na versão elétrica. Nós te ajudamos a reduzir o impacto ambiental do dia a dia.
              </Text>
            </Stack>
          </Grid>

          <Grid xs>
            <Stack spacing={2}>
              <Text variant='subtitle'>
                Protegendo o que é importante
              </Text>

              <Text variant='body'>
                Estamos orgulhosos do nosso legado em segurança. Seguimos inovando a maneira de ajudá-lo a proteger aquilo que é mais importante.
              </Text>
            </Stack>
          </Grid>
        </Grid>

        <Button
          variant='outlined'
        >
          Saiba mais sobre a volvo
        </Button>
      </CardContent>
    </Box>
  )
}