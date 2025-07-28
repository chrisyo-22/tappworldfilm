'use client'

import React from 'react'
import { HeroUIProvider } from "@heroui/react";

export default function HeroUI({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            {children}
        </HeroUIProvider>
    )
}
