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
      fontSize: 32,
      color: 'text.primary'
    },
    subtitle: {
      variant: 'h3',
      fontWeight: 500,
      fontSize: 20,
      color: 'text.primary'
    },
    body: {
      variant: 'body1',
      fontWeight: 400,
      fontSize: 16,
      color: 'text.secondary'
    }
  }

  return (
    <Typography
      variant={variants[variant].variant as any}
      fontWeight={variants[variant].fontWeight}
      fontSize={variants[variant].fontSize}
      color={variants[variant].color}
    >
      {children}
    </Typography>
  )
}