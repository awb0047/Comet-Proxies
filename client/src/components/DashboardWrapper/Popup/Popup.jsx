import React, { useState } from "react";
import { stripeCheckout, getTotalData } from '../../../utils/api'
import { PopupInner, TitleContainer, Title, BottomContainer, Line, Logo, TOS, TermsLink } from './PopupStyling'
import { Stack, Button, Select } from '@chakra-ui/react'
import { CopyIcon, DownloadIcon } from '@chakra-ui/icons'

export function Popup( {
    setButtonPopup, user, userdata, plans
} ) {

    const [currentPlan, setCurrentPlan] = useState(null)
    const [dataLeft, setDataLeft] = useState(null)

    async function checkDataLeft() {
        const response = await getTotalData();
        setDataLeft(response.data.dataLeft);
    }

    checkDataLeft();

    //console.log(currentPlan);

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
                            <option value="5" disabled={5 > dataLeft ? true : false}>200 IPs | 5GB | $85 | $17/GB</option>
                            <option value="10" disabled={10 > dataLeft ? true : false}>400 IPs | 10GB | $160 | $16/GB</option>
                            <option value="20" disabled={20 > dataLeft ? true : false}>600 IPs | 20GB  | $300 | $15/GB</option>
                            <option value="30" disabled={30 > dataLeft ? true : false}>800 IPs | 30GB | $420 | $14/GB</option>
                            <option value="40" disabled={40 > dataLeft ? true : false}>1000 IPs | 40GB | $520 | $13/GB</option>
                            <option value="50" disabled={50 > dataLeft ? true : false}>1200 IPs | 50GB | $600 | $12/GB</option>
                    </Select>
                </Stack>

                <TOS>By purchasing a plan, you agree to our <TermsLink target="_blank" rel="noopener noreferrer" href="terms">Terms of Services</TermsLink></TOS>

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