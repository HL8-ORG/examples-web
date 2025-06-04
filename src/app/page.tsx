"use client"

import { Button } from '@pkg/ui/components/button'
import * as React from 'react'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Hello World</h1>
        {/* 展示一张svg图片 */}
        <img src="/placeholder.svg" alt="logo" className="w-10 h-10" />
        <div className="flex flex-row gap-2">
          <Button size="sm" onClick={() => router.push('/login')}>
            Login
          </Button>
          <Button size="sm" onClick={() => router.push('/dashboard')}>
            Dashboard
          </Button>
        </div>
      </div>
    </div>
  )
}
