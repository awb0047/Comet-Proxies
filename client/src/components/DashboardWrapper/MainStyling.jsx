import styled from 'styled-components'

const Colors = {
    color1: '#0D0F11',
    color2: '#121518',
    color3: '#1F2328',
    color4: '#282D34',
    color5: '#333A42',
};

export const Mainbody_container = styled.div`
background: ${Colors.color2};
    height: 100vh;
    width: calc(100vw - 445px);
    float: right;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ResisDash = styled.div`
    background: ${Colors.discordGrey3};
    height: calc(100% - 50px);
    width: calc(100% - 50px);
    float: right;
`