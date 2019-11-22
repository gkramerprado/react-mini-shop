import styled from 'styled-components';

export const DivButton = styled.div`
    margin-left: 12px;
`;

export const CardImage = styled.img`
    width: 360px;
    height: 340px;
    border: 1px solid #cccccc5c;
    border-radius: 5px;
    margin: 80px;

    @media (max-width: 790px) {
        margin: 0px;
        width: 320px;
        height: 300px;
        margin: 40px 0px;
    }
`;

export const StyProduct = styled.div`
    width: 80vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 790px) {
        width: 100vw;
        flex-direction: column;
        text-align: center;
    }
`;

export const ContainerFields = styled.div`
    display: flex;
    align-items: center;
`;