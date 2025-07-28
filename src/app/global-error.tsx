'use client'

import { startTransition, useEffect } from 'react'
import { Button } from '../components/ui/button'
import { useRouter } from "next/navigation";
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  const router = useRouter();
  useEffect(() => {
    // Log error to external service
    console.error('Global Error:', error)
  }, [])


  const retry = () => {
    router.refresh();
    startTransition(reset);
  }

  return (
    <html>
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8">
          <div className="text-center space-y-4 max-w-md">
            {/* More serious error styling */}
            <div className="text-6xl">💥</div>
            <h1 className="text-2xl font-bold text-gray-100">
              Something went wrong!
            </h1>
            <p className="text-gray-300">
              We encountered an unexpected error. Our team has been notified.
            </p>
          </div>

          <div className="flex gap-4">
            <Button
              color="danger"
              variant="solid"
              onPress={retry}
            >
              Try Again
            </Button>
            <Button
              color="default"
              variant="bordered"
              onPress={() => {
                router.push('/')
                startTransition(reset);
              }}
            >
              Go Home
            </Button>
          </div>
        </div>
      </body>
    </html>
  )
}

