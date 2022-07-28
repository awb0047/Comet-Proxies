import React from "react";
import { PlanWrapper, PlanName, UsageContainer, Left, Total, Exp, Top } from './planStyle'
import { CircularProgress, CircularProgressLabel, Progress} from '@chakra-ui/react'

export function Plan( {
    user, userData, plans
} ) {

    //Data Left
    var dataUsedRounded = Math.round(plans.used * 10) / 10;
    var percentDataLeft = (plans.used / plans.bandwidth) * 100;

    //Old data left (DONT USE)
    // var dataLeft = (plans.bandwidth - plans.used)
    // dataLeft = Math.round(dataLeft * 10) / 10;

    //Plan End Date
    var endDateString = "" + plans.end_date;
    var endDate = endDateString.split(" ")[0];

    //Checks if there is active plan
    var isActivePlan = false;
    if (plans.package_is_active === 1) {
        isActivePlan = true;
    }
    return (
        <>
            <PlanWrapper>
                <Top>
                    <PlanName>Resi Plan</PlanName>
                    {isActivePlan ? (
                        <Progress value={percentDataLeft} bg="#606B78" w={150} mt="6" borderRadius="5"/>
                    ) : (
                        <Exp/>
                    )
                    }
                </Top>
                <UsageContainer>
                    {/* <CircularProgress value={percentDataLeft} size='25px' thickness='18px'/> */}
                    <Left>{dataUsedRounded} GB</Left>
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