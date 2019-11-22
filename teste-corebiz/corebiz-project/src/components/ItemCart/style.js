import styled from 'styled-components';

export const StyItemCart = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #cccccc4d;
    padding: 10px;
    margin: 0px 10px;
`;

export const Icon = styled.div`
    display: flex;
    color: salmon;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        margin-top: -2px;
    }

    &:active {
        margin-top: 0px;
    }
`;

export const InfoItem = styled.div`
    display: flex;
    align-items: center;
`;

export const Img = styled.img`
    width: 105px;
    height: 85px;
`;

export const ImgItem = styled.div`
    display: flex;
`;

export const DescItem = styled.div`
    display: flex;
    flex-direction: column;
    width: 135px;
`;

export const NameItem = styled.div`
    display: flex;
    font-size: 11px !important;
    justify-content: center;
`;

export const NumsItem = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 6px;
`;

export const ValItem = styled.div`

`;

export const QtyItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 65px;

    &svg {
        color: salmon;
    }
`;