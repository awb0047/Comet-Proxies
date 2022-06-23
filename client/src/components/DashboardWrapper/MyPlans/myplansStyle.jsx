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

export const PlansContainer = styled.div`
    position: relative;
    // background: ${Colors.color3};
    height: 570px;
    width: 350px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 50px;
`

export const HeaderText = styled.h1`
    width: auto;
    height: autopx;
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.color6};
    float: left;
    margin-left: 5px;
`

export const PlanWrapper = styled.div`
    background: ${Colors.color2};
    height: 100px;
    width: 350px;
    margin-top: 20px;
    border-radius: 10px;
    overflow: hidden;
`

export const BottomContainer = styled.div`
    position: absolute; 
    height: 130px;
    width: 350px;
    bottom: 0;
`

export const Line = styled.div`
    position: absolute;
    background: #22262C;
    height: 3px;
    width: 350px;
    border-radius: 5px;
    top: 0;
`

export const PlansBox = styled.div`
    margin-top: 20px;
    height: 380px;
    width: 350px;
    overflow-y: scroll;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 3px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        width: 3px;
        background-color: ${Colors.color6};
    }
`
