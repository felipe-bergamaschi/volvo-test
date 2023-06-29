'use client'

import { Hero } from '@/components/hero'
import { CommonLayout } from '@/components/layout/common'
import { Text } from '@/components/text'
import { Body } from '@/features/home/body'
import { useCars } from '@/query/useCars'

export default function Home() {
  const { isLoading, error, data } = useCars()

  return (
    <CommonLayout>
      <Hero />

      {!error ? (
        <Body data={data} isLoading={isLoading} />
      ) : (
        <Text variant='body'>
          Um erro ocorreu ao carregar os carros, tente recarregar a página
        </Text>
      )}
    </CommonLayout>
  )
}
