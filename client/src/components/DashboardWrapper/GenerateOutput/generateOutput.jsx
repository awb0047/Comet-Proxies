import React, { useState } from "react";
import { Stack, Button } from '@chakra-ui/react'
import { CopyIcon, DownloadIcon } from '@chakra-ui/icons'
import { BottomContainer, GenerateOutputContainer, InnerGenerate, Line, Proxies } from './generateOutputStyle'


export function GenerateOutput( {
    genProxies, proxiesGenerated, count
} ) {

    var printedProxies = [];
    if (genProxies.length > 0) {

        var newCount;

        if (count > genProxies.length) {
            newCount = genProxies.length
        } else {
            newCount = count;
        }

        for (var i = 0; i < newCount; i++) {
            printedProxies.push(genProxies[i])
        }
    }

    const onButtonClick = async ()=>{
        if (count <= 0) {
            alert('Please enter a valid number');
        } else {
            var proxyListCopy = "";
            for (var i = 0; i < printedProxies.length; i++) {
                proxyListCopy += printedProxies[i] + "\n"
            }
            navigator.clipboard.writeText(proxyListCopy)
            alert('Copied To Clipboard');
        }
    }

    return (
        <>
            <GenerateOutputContainer>
                <InnerGenerate>
                    <Proxies>
                    { proxiesGenerated? (
                        printedProxies.map((proxy) => (
                            proxy + '\n'
                        ))
                    ) : 'Proxies Not Generated'
                    }
                    </Proxies>
                </InnerGenerate>
                <BottomContainer>
                    <Line></Line>
                    <Stack direction='row' spacing={3}>
                    <Button onClick={() => onButtonClick()} leftIcon={<CopyIcon />} w='150px' bg='#333A42' color='white' variant='solid'>
                            Copy All
                        </Button>
                        <Button leftIcon={<DownloadIcon />} w='150px' bg='#333A42' color='white' variant='solid'>
                            Download
                        </Button>
                    </Stack>
                </BottomContainer>
            </GenerateOutputContainer>
        </>
    );
}