import { Box, Avatar, useTheme, useMediaQuery } from '@mui/material'
import SlickSlider from 'react-slick';

interface ISlider {
  children: React.ReactNode
}

export function Slider({ children }: ISlider) {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        width: '100%',
        '.slick-prev': {
          transform: 'rotate(180deg)',
          top: '100%',
          left: 'calc(100% - 88px)'
        },
        '.slick-next': {
          top: 'calc(100% + 19px)',
          right: 0
        },
        '.slick-next, .slick-prev': {
          position: 'absolute',
          width: 40,
          height: 40,
          zIndex: 1,
          display: isMobile ? 'none !important' : 'block',

          '&::before': {
            content: '""',
          }
        }
      }}
    >
      <SlickSlider
        {...settings}
        nextArrow={<Avatar src='/svg/chevron-circled.svg' />}
        prevArrow={<Avatar src='/svg/chevron-circled.svg' sx={{ transform: 'rotate(180deg)' }} />}
      >
        {children}
      </SlickSlider>
    </Box>
  )
}