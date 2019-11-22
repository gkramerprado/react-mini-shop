import styled from 'styled-components';

export const StyFooter = styled.footer`
    background: salmon;
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 55px 30px;
    outline: none;

    @media(max-width: 790px) {
        flex-direction: column;
    }
`;

export const InputGroup = styled.div`
    display: flex;
    justify-content: center;

    @media(max-width: 790px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;

export const ButtonForm = styled.button`
    margin: 5px;
    height: 40px;
    border: none;
    border-radius: 2px;
    padding: 0px 15px;
    background: white;
    color: salmon;
    cursor: pointer;
    outline: none;

    @media(max-width: 790px) {
        width: 80%;
    }

    &:hover {
        background: #e2e2e2;
    }

    &:active {
        background: #cacaca;
    }
`;

export const InputForm = styled.input`
    margin: 5px;
    height: 40px;
    border: none;
    border-radius: 2px;
    padding: 0px 15px;

    @media(max-width: 790px) {
        width: 80%;
    }
`;

export const News = styled.div`
    width: 80%;
    color: white;
    max-width: 230px;
    margin-right: 35px;

    @media(max-width: 790px) {
        max-width: 100%;
        margin-right: 0px;
    }
`;

export const NewsTitle = styled.p`
    letter-spacing: 5px;
    font-size: 30px;
    margin-bottom: 0px;
`;

export const NewsMessage = styled.p`

`;
