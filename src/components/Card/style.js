import styled from 'styled-components';

export const MainCard = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 250px;
    margin: 5px 10px;
    padding: 15px 10px;
    text-align: center;
    align-items: center;
    border: 1px solid #cccccc5c;
    border-radius: 5px;
    transition: 0.3s;
    z-index: 10;

    &:hover {
        box-shadow: 0px 0px 20px 3px rgba(212,212,212,0.75);
    }
`;

export const CardImage = styled.img`
    width: 220px;
    height: 200px;
`;

export const Ellipsis = styled.h4`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const CardContent = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none !important;
`;

