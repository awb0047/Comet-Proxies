import React from "react";
import { Stack, Button } from '@chakra-ui/react'
import { SettingsIcon, DeleteIcon, CloseIcon} from '@chakra-ui/icons'
import { HeadingContainer, Logo, Welcome, Picture, Tag, User } from './headingStyle'
import { logout } from '../../../utils/api'

export function Heading( {
    user, userData,
} ) {

    return (
        <>
            <HeadingContainer>
                <Logo></Logo>
                <Welcome>Welcome Back,</Welcome>
                <User>
                    <Picture src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`}></Picture>
                    <Tag>{user.discordTag}</Tag>
                </User>
                <Stack direction='row' spacing={5} mt={5}>
                    <Button leftIcon={<CloseIcon />} onClick={() => logout()} borderColor='#333A42' color='#333A42' variant='outline' width="180px" _hover={{background: "rgba(51, 58, 66, 0.5)"}}>
                        Sign Out
                    </Button>
                </Stack>
            </HeadingContainer>
        </>
    );
}