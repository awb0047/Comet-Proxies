import React, { useState } from "react";

import '../../utils/styles/dashstyle.css'
import { genProxies } from '../../utils/gen'
import { Heading } from './Heading/heading'
import { MyPlans} from './MyPlans/myplans'
import { Overview } from './Overview/overview'
import { Shop } from './Shop/shop'
import { Side } from './SideStyling'
import { Mainbody_container, Innerbody} from './MainStyling'
import { Generate } from "./Generate/generate";
import { GenerateOutput } from './GenerateOutput/generateOutput'

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
    user, userData, plans
} ) {

    var proxyList = [];

    const [genProxiesState, setGenProxiesState] = useState(false)

    if (genProxiesState === true) {
        proxyList = genProxies(user.proxyUser, user.proxyPass, user.sid, plans.activePlan[0].bandwidth)
    }

    return (
        <>
            <Mainbody_container>
                <Innerbody>
                    <Overview></Overview>
                    <Shop></Shop>
                    <Generate setGenProxiesState={setGenProxiesState}/>
                    <GenerateOutput gennedProxies={proxyList} user={ user } userData={ userData } plans={ plans }/>
                </Innerbody>
            </Mainbody_container>
        </>
    );
}