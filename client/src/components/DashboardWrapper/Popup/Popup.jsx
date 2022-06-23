import React, { useState } from "react";
import { stripeCheckout } from '../../../utils/api'
import { PopupInner, TitleContainer, Title, BottomContainer, Line, Logo } from './PopupStyling'
import { Stack, Button, Select } from '@chakra-ui/react'
import { CopyIcon, DownloadIcon } from '@chakra-ui/icons'

export function Popup( {
    setButtonPopup, user, userdata, plans
} ) {

    const [currentPlan, setCurrentPlan] = useState(null)

    console.log(currentPlan);

    return (
        <>
            <PopupInner>
                <TitleContainer>
                    <Title>Purchase Plans</Title>
                </TitleContainer>

                <Logo/>

                <Stack spacing={5} w='90%' mt='40px'>
                    <Select
                        onChange={(event) => setCurrentPlan(event.target.value)}
                        bg='#606B78'
                        borderColor='transparent'
                        color='#9FB0C4'
                        placeholder='Select a plan'>
                            <option value="1">200 IPs | 5GB | $85 | $17/GB</option>
                            <option value="2">400 IPs | 10GB | $160 | $16/GB</option>
                            <option value="3">600 IPs | 20GB  | $300 | $15/GB</option>
                            <option value="4">800 IPs | 30GB | $420 | $14/GB</option>
                            <option value="5">1000 IPs | 40GB | $520 | $13/GB</option>
                            <option value="6">1200 IPs | 50GB | $600 | $12/GB</option>
                    </Select>
                </Stack>

                <BottomContainer>
                    <Line/>
                    <Stack direction='row' spacing={3}>
                        <Button onClick={() => stripeCheckout(currentPlan, user.discordId, user.discordTag, user.proxyUser, user.proxyPass, user.email)} leftIcon={<CopyIcon />} w='150px' bg='#478BC9' color='white' variant='solid'>
                            Purchase
                        </Button>
                        <Button onClick={() => setButtonPopup(false)} leftIcon={<DownloadIcon />} w='150px' bg='#478BC9' color='white' variant='solid'>
                            Cancel
                        </Button>
                    </Stack>
                </BottomContainer>
            </PopupInner>
        </>
    );
}