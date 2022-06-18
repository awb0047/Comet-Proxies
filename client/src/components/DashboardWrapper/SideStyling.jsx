import styled from 'styled-components'

const Colors = {
    color1: '#0D0F11',
    color2: '#121518',
    color3: '#1F2328',
    color4: '#282D34',
    color5: '#333A42',
};

export const Side = styled.div`
    background: ${Colors.color1};
    height: 100vh;
    width: 445px;
    position: sticky;
    float: left;
    display: flex;
    align-items: center;
    padding-top: 50px;
    flex-direction: column;
    z-index: 9;
`