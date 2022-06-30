import React, { useState } from "react";
import { genProxies } from '../../../utils/api'
import { Select, Stack, Button, Input } from '@chakra-ui/react'
import { GenerateContainer, Title, InnerGenerate, BottomContainer, Line} from './generateStyle'

export function Generate( {
    user, userData, plans, setGenProxies, setProxiesGenerated, setCount,
} ) {

    const [proxyCount, setProxyCount] = useState(null)

    const onButtonClick = async ()=>{
        if (proxyCount <= 0) {
            alert('Please enter a valid number');
        } else {
            var proxyList = await genProxies(user.proxyUser, user.proxyPass, user.sid, plans.activePlan[0].bandwidth)
            setTimeout(async function (){
    
                console.log(proxyList.length);
                await setGenProxies(proxyList);
                setProxiesGenerated(true);
                setCount(proxyCount);
                        
            }, 500);
        }
    }

    var hasActivePlan = false;
    var activePlan = [];
    var proxyNumber;
    try {
        hasActivePlan = plans.activePlan.length > 0;
        activePlan = plans.activePlan[0];
        if (hasActivePlan == true) {
            activePlan = plans.activePlan[0];
            
            if (activePlan.bandwidth === 0) {
                proxyNumber = 0;
            }
            else if (activePlan.bandwidth === 5) {
                proxyNumber = 200;
            }
            else if (activePlan.bandwidth === 10) {
                proxyNumber = 400;
            }
            else if (activePlan.bandwidth === 20) {
                proxyNumber = 600;
            }
            else if (activePlan.bandwidth === 30) {
                proxyNumber = 800;
            }
            else if (activePlan.bandwidth === 40) {
                proxyNumber = 1000;
            }
            else if (activePlan.bandwidth === 50) {
                proxyNumber = 1200;
            }
            else {
                proxyNumber = 2000;
            }
        }
    } catch (err) {
        proxyNumber = 0;
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
                    <Input onChange={(event) => setProxyCount(event.target.value)} variant='filled' bg='#121518' _placeholder={{ color: '#333A42' }} color='white' placeholder={'Maximum ' + proxyNumber} />
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