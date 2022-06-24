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

export const GenerateContainer = styled.div`
    position: absolute;
    height: 450px;
    width: 310px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    bottom: 10px;
    left: 50px;

    @media (max-width: 500px) {
        position: relative;
        left: 0px;
        margin: 0 auto;
        margin-top: 20px;
    }
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.color6};
    float: left;
`

export const InnerGenerate = styled.div`
    position: absolute;
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: ${Colors.color3};
    border-radius: 8px;
    bottom: 0;
    padding: 20px;
`
export const BottomContainer = styled.div`
    position: absolute; 
    height: 70px;
    width: 350px;
    bottom: 0;
`

export const Line = styled.div`
    position: absolute;
    background: #282D34;
    height: 3px;
    width: 270px;
    border-radius: 5px;
    top: 0;
`