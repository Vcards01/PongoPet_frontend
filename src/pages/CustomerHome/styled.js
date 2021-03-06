import styled from 'styled-components';

export const Container = styled.div`
width:90%
max-width:980px;
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

export const ItemArea = styled.div`
    max-width:980px;
    margin-top:20px;
    margin-bottom:20px;
`;

export const ItemList = styled.div`

    @media (max-width: 1023px) {
        grid-template-columns: repeat(1,1fr);
    }
    @media (max-width: 767px) {
        justify-items:center
    }
    display:grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 15px
    `;