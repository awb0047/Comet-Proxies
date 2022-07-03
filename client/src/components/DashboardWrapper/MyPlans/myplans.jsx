import React from "react";
import { Stack, Button } from '@chakra-ui/react'
import { SettingsIcon, AddIcon} from '@chakra-ui/icons'
import { PlansContainer, HeaderText, PlanWrapper, BottomContainer, Line, PlansBox, NoPlans } from './myplansStyle'
import { Plan } from './Plan/plan'

export function MyPlans( {
    user, userData, plans, setButtonPopup
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
                <PlansBox>
                    {hasActivePlan? (
                        <Plan user={ user } userData={ userData } plans={ activePlan }></Plan>
                    ) : (
                        <NoPlans>Plans will appear here as you buy them</NoPlans>
                    )}
                    {
                        plans.standByPlan.map((plan) => (
                            <Plan user={ user } userData={ userData } plans={ plan }></Plan>
                        ))
                    }
                </PlansBox>
                {/* {hasActivePlan? (
                    <Plan user={ user } userData={ userData } plans={ activePlan }></Plan>
                ) : (
                    <h1>No Plans!</h1>
                )}
                {
                    plans.standByPlan.map((plan) => (
                        <Plan user={ user } userData={ userData } plans={ plan }></Plan>
                    ))
                } */}
                <BottomContainer>
                    <Line></Line>
                    <Stack direction='column' spacing={5} mt={7}>
                        <Button onClick={() => setButtonPopup(true)} leftIcon={<AddIcon />} background='#478BC9' color='white' variant='solid' _hover={{background: "#6197CA"}}>
                            Buy New Plans
                        </Button>
                    </Stack>
                </BottomContainer>
            </PlansContainer>
        </>
    );
}