import React from "react";

import '../../utils/styles/dashstyle.css'
import { Heading } from './Heading/heading'
import { MyPlans} from './MyPlans/myplans'
import { Overview } from './Overview/overview'
import { Side } from './SideStyling'
import { Mainbody_container, Innerbody} from './MainStyling'

export function SideBar( {
    user, userData, plans
} ) {
    return (
        <>
            <Side>
                <Heading user={ user } userData={ userData }></Heading>
                <MyPlans user={ user } userData={ userData } plans={ plans }></MyPlans>
            </Side>
        </>
    );
}

export function MainBody( {
    user, userData,
} ) {
    return (
        <>
            <Mainbody_container>
                <Innerbody>
                    <Overview></Overview>
                </Innerbody>
            </Mainbody_container>
        </>
    );
}