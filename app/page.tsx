'use client'

import { Hero } from '@/components/hero'
import { CommonLayout } from '@/components/layout/common'
import { Body } from '@/features/home/body'
import { useCars } from '@/query/useCars'

export default function Home() {
  const { isLoading, error, data } = useCars()

  if (error) {
    return (
      <div>
        deu erro
      </div>
    )
  }

  return (
    <CommonLayout>
      <Hero />

      <Body data={data} isLoading={isLoading} />
    </CommonLayout>
  )
}
