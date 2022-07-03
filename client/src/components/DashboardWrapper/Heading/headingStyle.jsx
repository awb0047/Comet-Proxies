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

export const HeadingContainer = styled.div`
    position: relative;
    height: 215px;
    width: 350px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

export const Logo = styled.img`
    height: 50px;
    width: 50px;
    content: url('https://media.discordapp.net/attachments/974850038381547521/986083447737044992/logo_transparent.png?width=810&height=716');
`

export const Welcome = styled.h1`
    width: 100%;
    height: autopx;
    font-size: 15px;
    font-weight: regular;
    color: ${Colors.color12};
    float: left;
    margin-top: 30px;
`
export const User = styled.div`
    height: 40px;
    width: auto;
    display: flex;
    align-items: center;
    margin-top: 5px;
`

export const Picture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    float: left;
`

export const Tag = styled.h1`
    width: auto;
    height: autopx;
    font-size: 20px;
    font-weight: bold;
    color: ${Colors.color8};
    float: left;
    margin-left: 15px;
`