import React from "react";
import { genProxies } from '../../../utils/api'
import { Select, Stack, Button, Input } from '@chakra-ui/react'
import { GenerateContainer, Title, InnerGenerate, BottomContainer, Line} from './generateStyle'

export function Generate( {
    user, userData, plans, setGenProxies, setProxiesGenerated
} ) {

    const onButtonClick = async ()=>{
        var proxyList = await genProxies(user.proxyUser, user.proxyPass, user.sid, plans.activePlan[0].bandwidth)
        setTimeout(async function (){
  
            console.log(proxyList.length);
            await setGenProxies(proxyList);
            setProxiesGenerated(true);
                      
          }, 500);
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
                        <Button onClick={() => onButtonClick()} background='#478BC9' color='white' variant='solid' mt={4} w='270px'>Generate</Button>
                    </BottomContainer>
                </InnerGenerate>
            </GenerateContainer>
        </>
    );
}