import React from "react";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Button, Stack, } from '@chakra-ui/react'
import { ChevronDownIcon, InfoIcon, PhoneIcon} from '@chakra-ui/icons'

import '../../utils/styles/dashstyle.css'
import {Nav, InnerNav , User, Picture, Tag, Logo} from './NavStyling'
import { Heading } from './Heading/heading'
import { MyPlans} from './MyPlans/myplans'
import { Side } from './SideStyling'
import { Mainbody_container, ResisDash } from './MainStyling'

export function SideBar( {
    user, userData,
} ) {
    return (
        <>
            <Side>
                <Heading user={ user } userData={ userData }></Heading>
                <MyPlans user={ user } userData={ userData }></MyPlans>
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
                <ResisDash></ResisDash>
            </Mainbody_container>
        </>
    );
}