'use client'

import { Spinner } from "@/components/ui/progress";
export default function loading() {
    return (
        <Spinner className="flex flex-col items-center justify-center min-h-screen gap-4" />
    )
}
