import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 767px) {
        width:350px;
    }
    @media (max-width: 424px) {
        width:300px;
    }
    @media (max-width: 374px) {
        width:250px;
    }
    width:400px;
    background-color:#ffffff;
    border-radius:15px;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    padding:10px;
    display:flex;
    flex-direction: column;
    align-items:center;
    `;

export const ButtonArea = styled.div`
    display: flex;
    width:400px;
`;