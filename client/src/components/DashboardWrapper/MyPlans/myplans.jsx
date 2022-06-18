import React from "react";
import { Stack, Button } from '@chakra-ui/react'
import { SettingsIcon, DeleteIcon} from '@chakra-ui/icons'
import { PlansContainer, HeaderText, PlanWrapper, BottomContainer, Line } from './myplansStyle'
import { Plan } from './Plan/plan'

export function MyPlans( {
    user, userData,
} ) {
    return (
        <>
            <PlansContainer> 
                <HeaderText>Myyy Plans</HeaderText>
                <Plan user={ user } userData={ userData }></Plan>
                <Plan user={ user } userData={ userData }></Plan>
                <Plan user={ user } userData={ userData }></Plan>
                <BottomContainer>
                    <Line></Line>
                    <Stack direction='column' spacing={5} mt={7}>
                        <Button leftIcon={<SettingsIcon />} background='#478BC9' color='white' variant='solid'>
                            Buy New Plans
                        </Button>
                        <Button background='transparent' color='#606B78' variant='outline'>
                            Manage Plans
                        </Button>
                    </Stack>
                </BottomContainer>
            </PlansContainer>
        </>
    );
}