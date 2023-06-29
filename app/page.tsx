'use client'

import { Body } from '@/components/body'
import { Hero } from '@/components/hero'
import { CommonLayout } from '@/components/layout/common'
import { useCars } from '@/query/useCars'

export default function Home() {
  const { isLoading, error, data } = useCars()

  console.log({ isLoading, error, data })

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

      {/* TODO: faz um loading descente por favor */}
      {isLoading ? (
        <div>
          loading
        </div>
      ) : (
        <Body data={data} />
      )}
    </CommonLayout>
  )
}
