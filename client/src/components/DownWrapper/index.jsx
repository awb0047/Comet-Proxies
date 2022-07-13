import React, { useState } from "react";
import '../../utils/styles/dashstyle.css';
import { Outerbody, Innerbody, Logo, MainText } from './mainStyling'

export function Main( {
    props
} ) {
    return (
        <>
            <Outerbody>
                <Innerbody>
                    <Logo/>
                    <MainText>Site Down for Maintenence</MainText>
                </Innerbody>
            </Outerbody>
        </>
    );
}