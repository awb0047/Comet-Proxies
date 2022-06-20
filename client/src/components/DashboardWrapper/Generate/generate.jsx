import React from "react";
import { genProxies } from '../../../utils/gen'
import { Select, Stack, Button, Input } from '@chakra-ui/react'
import { GenerateContainer, Title, InnerGenerate, BottomContainer, Line} from './generateStyle'

export function Generate( {
    setGenProxiesState,
} ) {

    const onButtonClick=(mode)=>{
        setGenProxiesState(mode)
    }

    return (
        <>
            <GenerateContainer>
                <Title>Generate</Title>
                <InnerGenerate>
                    <Stack spacing={3} w='100%'>
                    <Select
                        bg='#333A42'
                        borderColor='transparent'
                        color='#9FB0C4'
                        placeholder='Select your plan'
                    />
                    <Select
                        bg='#333A42'
                        borderColor='transparent'
                        color='#9FB0C4'
                        placeholder='Static'
                    />
                    <Select
                        bg='#333A42'
                        borderColor='transparent'
                        color='#9FB0C4'
                        placeholder='United States'
                    />
                    <Input variant='filled' bg='#121518' _placeholder={{ color: '#333A42' }} color='white' placeholder='Maximum 200' />
                    </Stack>
                    <BottomContainer>
                        <Line></Line>
                        <Button onClick={() => onButtonClick(true)} background='#478BC9' color='white' variant='solid' mt={4} w='270px'>Generate</Button>
                    </BottomContainer>
                </InnerGenerate>
            </GenerateContainer>
        </>
    );
}