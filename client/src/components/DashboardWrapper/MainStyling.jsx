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

export const Mainbody_container = styled.div`
    background: ${Colors.color2};
    height: 100%;
    width: calc(100vw - 445px);
    float: right;
    display: flex;
    justify-content: center;
    @media (max-width: 500px) {
        // background: red;
        float: left;
        width: 100vw;
        height: auto;
    }
`

export const Innerbody = styled.div`
    //background: ${Colors.color5};
    height: 730px;
    width: 1000px;
    margin-top: 160px;
    position: relative;
    
    @media (max-width: 500px) {
        // background: transparent;
        width: 100%
        margin-top: 0px;
        height: auto;
    }
`