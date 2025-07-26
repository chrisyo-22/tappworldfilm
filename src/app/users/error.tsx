'use client'

import React, { startTransition, useEffect } from 'react';
import { useRouter } from "next/navigation";
import { Button } from "@/components/HeroUIComponents";
export default function error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    const router = useRouter();
    useEffect(() => {
        console.log(error);
        console.log(error.digest);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen gap-4">
            <h2>Encountered an error</h2>
            <Button onPress={() => {
                router.refresh(); //reload this current page(/users)
                startTransition(reset);
            }}>Reset</Button>
        </div>

    )
}
