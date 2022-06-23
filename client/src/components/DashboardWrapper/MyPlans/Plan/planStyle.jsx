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
    margin-bottom: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    border:1px solid ${Colors.color3};
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
export const UsageContainer = styled.div`
    height: 30px;
    width: 200px;
    display: flex;
    align-items: center;
    margin-top: 5px;
    margin-left: 30px;
`

export const Left = styled.h1`
    width: auto;
    height: autopx;
    font-size: 25px;
    font-weight: regular;
    color: ${Colors.color8};
    margin-left: 10px;
`

export const Total = styled.h1`
    width: auto;
    height: autopx;
    font-size: 15px;
    font-weight: bold;
    color: ${Colors.color6};
    float: left;
    margin-left: 10px;
`