import React from "react";
import { Stack, Button } from '@chakra-ui/react'
import { SettingsIcon, DeleteIcon} from '@chakra-ui/icons'
import { PlansContainer, HeaderText, PlanWrapper, BottomContainer, Line } from './myplansStyle'
import { Plan } from './Plan/plan'

export function MyPlans( {
    user, userData, plans
} ) {
    var hasActivePlan = false;
    var activePlan = [];
    try {
        hasActivePlan = plans.activePlan.length > 0;
        activePlan = plans.activePlan[0];
        if (hasActivePlan == true) {
            activePlan = plans.activePlan[0];
        }
    } catch (err) {
        
    }
    return (
        <>
            <PlansContainer> 
                <HeaderText>My Plans</HeaderText>
                {hasActivePlan? (
                    <Plan user={ user } userData={ userData } plans={ activePlan }></Plan>
                ) : (
                    <h1>No Plans!</h1>
                )}
                {
                    plans.standByPlan.map((plan) => (
                        <Plan user={ user } userData={ userData } plans={ plan }></Plan>
                    ))
                }
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