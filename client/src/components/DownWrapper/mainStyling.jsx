import styled from 'styled-components'

const Colors = {
    color1: '#0D0F11',
    color2: '#121518',
    color3: '#1F2328',
    color4: '#282D34',
    color5: '#333A42',
    color6: '#606B78',
    color7: '#9FB0C3',
    color8: '#FFFFFF',
    color9: '#C74E4E',
    color10: '#FEB950',
    color11: '#33E99D',
    color12: '#94ECFF',
    color13: '#478BC9',
};

export const Outerbody = styled.div`
    //background: ${Colors.color10};
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Innerbody = styled.div`
    //background: ${Colors.color13};
    height: calc(100vw * 0.4);
    width: calc(100vw * 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Logo = styled.img`
    height: 30%;
    width: 30%;
    content: url('https://media.discordapp.net/attachments/974850038381547521/986083447737044992/logo_transparent.png?width=810&height=716');
`

export const MainText = styled.h1`
    color: white;
    font-size: 3vw;
    margin-top: 50px;
`