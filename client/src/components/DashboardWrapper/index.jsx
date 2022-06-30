import React, { useState } from "react";
import '../../utils/styles/dashstyle.css'
import { Heading } from './Heading/heading'
import { MyPlans} from './MyPlans/myplans'
import { Overview } from './Overview/overview'
import { Shop } from './Shop/shop'
import { Popup } from './Popup/Popup'
import { Side } from './SideStyling'
import { PopupWindow } from './PurchasePopUpStyling'
import { Mainbody_container, Innerbody} from './MainStyling'
import { Generate } from "./Generate/generate";
import { GenerateOutput } from './GenerateOutput/generateOutput'

export function SideBar( {
    user, userData, plans, setButtonPopup
} ) {
    return (
        <>
            <Side>
                <Heading user={ user } userData={ userData }></Heading>
                <MyPlans user={ user } userData={ userData } plans={ plans } setButtonPopup={setButtonPopup}></MyPlans>
            </Side>
        </>
    );
}

export function MainBody( {
    user, userData, plans
} ) {

    const [proxiesGenerated, setProxiesGenerated] = useState(false)
    const [genProxies, setGenProxies] = useState([])
    const [count, setCount] = useState(0)

    return (
        <>
            <Mainbody_container>
                <Innerbody>
                    <Overview></Overview>
                    <Shop></Shop>
                    <Generate setGenProxies={setGenProxies} setProxiesGenerated={setProxiesGenerated} user={ user } userData={ userData } plans={ plans } setCount={setCount} count={count} />
                    <GenerateOutput genProxies={genProxies} proxiesGenerated={proxiesGenerated} count={count} />
                </Innerbody>
            </Mainbody_container>
        </>
    );
}

export function PurchasePopUp( {
    user, userData, plans, buttonPopup, setButtonPopup
} ) {
    return (buttonPopup) ? (
        <PopupWindow>
            <Popup setButtonPopup={setButtonPopup} user={user} userData={userData} plans={plans} />
        </PopupWindow>
    ) : "";
}