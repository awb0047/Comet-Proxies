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

export const GenerateOutputContainer = styled.div`
    position: relative;
    height: 400px;
    width: calc(70% - 120px);
    min-width: 350px;
    background: ${Colors.color3};
    border-radius: 8px;
    float: left;
    margin-top: 50px;
    margin-left: 20px;

    @media (max-width: 1630px) {
        width: calc(100% - 390px);
    }

    @media (max-width: 1300px) {
        width: calc(100% - 430px);
    }

    @media (max-width: 830px) {
        position: relative;
        left: 0px;
        margin: 0 auto;
        margin-top: 40px;
        width: 350px;
    }
`

export const InnerGenerate = styled.div`
    position: absolute;
    height: 290px;
    width: calc(100% - 30px);
    top: 15px;
    left: 15px;
    background: ${Colors.color2};
    border-radius: 6px;
    padding: 20px;
`

export const BottomContainer = styled.div`
    position: absolute; 
    height: 70px;
    width: 100%;
    bottom: 0;
    display: flex;
    justify-content: right;
    align-items: center;
    padding-right: 20px;
`

export const Line = styled.div`
    position: absolute;
    background: #282D34;
    height: 3px;
    width: calc(100% - 40px);
    border-radius: 5px;
    top: 0;
    margin-left: 30px
`

export const Proxies = styled.p`
    color: #75828F;
    height: 250px;
    overflow: scroll;
    overflow-x: hidden;
    white-space: pre-line;

    &::-webkit-scrollbar {
        width: 3px;
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
        width: 3px;
        background-color: ${Colors.color6};
    }
`