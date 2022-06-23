import React, { useState } from "react";
import { Stack, Button } from '@chakra-ui/react'
import { CopyIcon, DownloadIcon } from '@chakra-ui/icons'
import { BottomContainer, GenerateOutputContainer, InnerGenerate, Line, Proxies } from './generateOutputStyle'


export function GenerateOutput( {
    genProxies, proxiesGenerated
} ) {

    return (
        <>
            <GenerateOutputContainer>
                <InnerGenerate>
                    <Proxies>
                    { proxiesGenerated? (
                        genProxies.map((proxy) => (
                            proxy + '\n'
                        ))
                    ) : 'Proxies Not Generated'
                    }
                    </Proxies>
                </InnerGenerate>
                <BottomContainer>
                    <Line></Line>
                    <Stack direction='row' spacing={3}>
                        <Button leftIcon={<CopyIcon />} w='150px' bg='#333A42' color='white' variant='solid'>
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