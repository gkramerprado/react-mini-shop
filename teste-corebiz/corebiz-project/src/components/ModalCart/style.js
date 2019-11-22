import styled from 'styled-components';

export const ModalMain = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 40px;
    display: ${props => props.displayModal};
    cursor: default;
    width: 19rem;
    min-height: 10rem;
    box-shadow: 0px 0px 13px 3px rgba(212,212,212,0.75);
    z-index: 100;
    background: white;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: inherit;
    position: relative;
`;

export const Header = styled.div`
    width: 100%;
    height: 45px;
    background: salmon;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    letter-spacing: 4px;
    text-transform: uppercase;
`;

export const Body = styled.div`
    width: 100%;
    max-height: 330px;
    background: white;
    overflow: hidden;
    overflow-y: auto;
`;

export const Footer = styled.div`
    width: 100%;
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 0px 8px 1px rgba(212,212,212,0.75);
    z-index: 100;
`;

export const EmptyMessage = styled.div`
    padding: 20px;
    letter-spacing: 2px;
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

export const ClearCart = styled.span`
    display: flex;
    align-items: center;
`;