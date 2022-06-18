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

export const PlanWrapper = styled.div`
    background: ${Colors.color2};
    height: 100px;
    width: 350px;
    margin-top: 20px;
    border-radius: 10px;
`

export const PlanName = styled.h1`
    width: auto;
    height: autopx;
    font-size: 15px;
    font-weight: bold;
    color: ${Colors.color6};
    float: left;
    margin-left: 30px;
    margin-top: 20px;
`
