import React from "react";
import { Button } from '@chakra-ui/react'

export function LandingPage( props ) {
    const login = () => window.location.href = 'http://45.33.101.29/api/auth/discord';
    return (
        <Button
            onClick={login}
            colorScheme='blue'
        >Login</Button>
    )
}