import styled from 'styled-components';

export const Container = styled.div`
margin: 20px auto;
`;

export const CategoryArea = styled.div`
margin-top:20px;

`;

export const CategoryList= styled.div`
display:flex;
border-bottom:solid 1px #dbc33b;
justify-content:center
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