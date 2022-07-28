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

export const PopupInner = styled.div`
    position: relative;
    height: 400px;
    width: 100%;
    max-width: 700px;
    background: ${Colors.color5};
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BottomContainer = styled.div`
    position: absolute; 
    height: 100px;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding-right: 20px;
`

export const Line = styled.div`
    position: absolute;
    background: #282D34;
    height: 3px;
    width: calc(100% - 50px);
    border-radius: 5px;
    top: 0;
`

export const TitleContainer = styled.div`
    top: 0;
    height: 80px;
    width: 100%;
    background: ${Colors.color3};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.h1`
    width: auto;
    height: autopx;
    font-size: 30px;
    font-weight: bold;
    color: ${Colors.color13};
    float: left;
    margin-left: 5px;
`

export const Logo = styled.img`
    height: 50px;
    width: 50px;
    margin-top: 20px;
    content: url('https://media.discordapp.net/attachments/974850038381547521/986083447737044992/logo_transparent.png?width=810&height=716');
`

export const TOS = styled.h1`
    width: auto;
    height: autopx;
    font-size: 15px;
    font-weight: normal;
    color: ${Colors.color7};
    float: left;
    margin-left: 5px;
    margin-top: 22px;
`

export const TermsLink = styled.a`
    color: white;
`