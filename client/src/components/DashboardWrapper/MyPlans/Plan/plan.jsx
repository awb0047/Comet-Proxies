import React from "react";
import { PlanWrapper, PlanName, UsageContainer, Left, Total, Exp } from './planStyle'
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

export function Plan( {
    user, userData, plans
} ) {
    var dataLeft = (plans.bandwidth - plans.used)
    var percentDataLeft = (dataLeft / plans.bandwidth) * 100;
    dataLeft = Math.round(dataLeft * 10) / 10;
    var endDateString = "" + plans.end_date;
    var endDate = endDateString.split(" ")[0];
    var isActivePlan = false;
    if (plans.package_is_active === 1) {
        isActivePlan = true;
    }
    return (
        <>
            <PlanWrapper>
                <PlanName>Resi Plan</PlanName>
                <UsageContainer>
                    <CircularProgress value={percentDataLeft} size='25px' thickness='18px'/>
                    <Left>{dataLeft} GB</Left>
                    <Total>/ {plans.bandwidth} GB</Total>
                    {isActivePlan ? (
                        <Exp>{endDate}</Exp>
                    ) : (
                        <Exp/>
                    )
                    }
                </UsageContainer>
            </PlanWrapper>
        </>
    );
}