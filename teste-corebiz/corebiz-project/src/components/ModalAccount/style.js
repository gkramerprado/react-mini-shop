import styled from 'styled-components';

export const ModalMain = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 40px;
    display: ${props => props.displayModal};
    cursor: default;
    width: 19rem;
    min-height: 20rem;
    box-shadow: 0px 0px 13px 3px rgba(212,212,212,0.75);
    z-index: 100;
    background: white;
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
`;

export const Header = styled.div`
    width: 100%;
    height: 10rem;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Footer = styled.div`
    width: 100%;
    height: 10rem;
    background: white;
    display: flex;
    align-items: center;
    box-shadow: 0px 0px 8px 1px rgba(212,212,212,0.75);
    z-index: 100;
`;

export const HeaderTitle = styled.h3`
    letter-spacing: 3px;
    color: salmon;
    opacity: 0.7;
`;

export const Logout = styled.p`
    color: salmon;
    text-decoration: underline;
    font-size: 16px;
    opacity: 0.7;
`;

export const UserMail = styled.p`
    color: gainsboro;
    font-size: 12px;
    letter-spacing: 1px;
`;