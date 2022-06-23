import React from "react";
import { Stack, Button } from '@chakra-ui/react'
import { SettingsIcon, DeleteIcon} from '@chakra-ui/icons'
import { HeadingContainer, Logo, Welcome, Picture, Tag, User } from './headingStyle'

export function Heading( {
    user, userData,
} ) {
    const logout = () => window.location.href = 'http://localhost:3001/api/auth/logout';

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
                    <Button leftIcon={<SettingsIcon />} borderColor='#333A42' color='#333A42' variant='outline' width={60}>
                        Settings
                    </Button>
                    <Button rightIcon={<DeleteIcon />} onClick={() => logout()} borderColor='#333A42' color='#333A42' variant='outline' width={60}>
                        Log Out
                    </Button>
                </Stack>
            </HeadingContainer>
        </>
    );
}