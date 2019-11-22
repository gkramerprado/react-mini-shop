import styled from 'styled-components';

export const StyButton = styled.button`
    min-width: 50%;
    background: salmon;
    color: white;
    margin: 2px;
    outline: none;
    cursor: pointer;
    transition: 0.15s;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 3px;
    height: 40px;
    border: none;
    border-radius: 2px;

    &:hover {
        background: #de7265;
    }
    
    &:active {
        background: #d66d61;
    }
`;