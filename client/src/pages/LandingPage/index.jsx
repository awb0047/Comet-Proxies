import React from "react";
import { Button } from '@chakra-ui/react'

export function LandingPage( props ) {
    const login = () => window.location.href = 'https://www.cometproxies.com/api/auth/discord';
    return (
        <Button
            onClick={login}
            colorScheme='blue'
        >Login</Button>
    )
}