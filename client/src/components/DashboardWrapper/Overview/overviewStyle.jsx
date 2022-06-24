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

export const OverviewContainer = styled.div`
    position: absolute;
    height: 215px;
    width: 370px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    left: 50px;

    @media (max-width: 500px) {
        position: relative;
        left: 0px;
        margin: 0 auto;
    }
`

export const Title = styled.h1`
    font-size: 24px;
    font-weight: bold;
    color: ${Colors.color6};
    float: left;
`

export const InnerOverview = styled.div`
    position: absolute;
    height: 160px;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    background: ${Colors.color3};
    border-radius: 8px;
    bottom: 0;
    padding: 20px;
`

export const InnerTitle = styled.h1`
    font-size: 16px;
    font-weight: normal;
    color: ${Colors.color7};
    float: left;
`