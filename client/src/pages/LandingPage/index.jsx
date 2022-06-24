import React from "react";
import { Button } from '@chakra-ui/react'
import { login } from '../../utils/api'

export function LandingPage( props ) {
    return (
        <Button
            onClick={login}
            colorScheme='blue'
        >Login</Button>
    )
}