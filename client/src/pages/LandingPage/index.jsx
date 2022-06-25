import React from "react";
import "../../utils/styles/landingstyle.css"
import { Button } from '@chakra-ui/react'
import { login } from '../../utils/api'

export function LandingPage( props ) {
    return (
        <div className="landing-container">
            <img src='https://media.discordapp.net/attachments/974850038381547521/986083447737044992/logo_transparent.png' width='300px'/>
            <Button
            onClick={login}
            colorScheme='blue'
            mt='30px'
            >Login With Discord</Button>
        </div>
    )
}