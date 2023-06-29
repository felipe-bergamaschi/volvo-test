import { Typography } from '@mui/material'

interface ITextProps {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body';
}

export function Text({ children, variant = 'body' }: ITextProps) {
  const variants = {
    title: {
      variant: 'h4',
      fontWeight: 500,
      fontSize: 32
    },
    subtitle: {
      variant: 'h6',
      fontWeight: 400,
      fontSize: 24
    },
    body: {
      variant: 'body1',
      fontWeight: 400,
      fontSize: 16
    }
  }

  return (
    <Typography
      variant={variants[variant].variant as any}
      fontWeight={variants[variant].fontWeight}
      fontSize={variants[variant].fontSize}
    >
      {children}
    </Typography>
  )
}