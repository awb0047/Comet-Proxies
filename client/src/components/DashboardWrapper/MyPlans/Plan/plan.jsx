import React from "react";
import { PlanWrapper, PlanName, UsageContainer, Left, Total } from './planStyle'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export function Plan( {
    user, userData, plans
} ) {
    var dataLeft = (plans.bandwidth - plans.used)
    var percentDataLeft = (dataLeft / plans.bandwidth) * 100;
    return (
        <>
            <PlanWrapper>
                <PlanName>Resi Plan</PlanName>
                <UsageContainer>
                    <CircularProgress value={percentDataLeft} size='25px' thickness='18px'/>
                    <Left>{dataLeft} GB</Left>
                    <Total>/ {plans.bandwidth} GB</Total>
                </UsageContainer>
            </PlanWrapper>
        </>
    );
}