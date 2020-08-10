import styled from 'styled-components';

export const Container = styled.div`
width:90%;
max-width:980px;
margin: 20px auto;
text-align:center;
`;

export const ItemList = styled.div`

    @media (max-width: 1023px) {
        grid-template-columns: repeat(1,1fr);
    }
    @media (max-width: 767px) {
        justify-items:center
    }
    width:90%;
    max-width:980px;
    display:grid;
    grid-template-columns: repeat(1,1fr);
    grid-gap: 15px
    `;
export const Titulo = styled.h1``;