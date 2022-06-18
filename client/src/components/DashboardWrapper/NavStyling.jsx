import styled from 'styled-components'

const Colors = {
    1: '#0D0F11',
    2: '#121518',
    3: '#1F2328',
    4: '#282D34',
    5: '#333A42',
};

export const Nav = styled.nav`
    height: 120px;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    top: 0;
    z-index: 10;
`

export const InnerNav = styled.div`
    height: 50px;
    width: calc(100vw - 100px);
    display: flex;
    align-items: center;
`

export const Logo = styled.img`
    height: 80px;
    width: 80px;
    content: url('https://media.discordapp.net/attachments/974850038381547521/986083447737044992/logo_transparent.png?width=810&height=716');
`

export const User = styled.div`
    height: 100%;
    width: auto;
    display: flex;
    align-items: center;
    margin-left: auto;
`

export const Picture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    float: left;
`

export const Tag = styled.h1`
    width: auto;
    height: autopx;
    font-size: 20px;
    font-weight: bolder;
    color: white;
    float: left;
    margin-left: 15px;
`