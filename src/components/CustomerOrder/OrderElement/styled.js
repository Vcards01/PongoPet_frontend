import styled from 'styled-components';

export const Container = styled.div`
    @media (max-width: 424px) {
        width:250px;
    }
    @media (max-width: 374px) {
        width:200px;
    }
    width:550px;
    background-color:#ffffff;
    border-radius:15px;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    padding:10px;
    display:flex;
    align-items:center;
    `;


export const ItemPhotoArea = styled.div`
width:65px;
height:65px;
`;

export const ItemInfoArea = styled.div`
flex:1;
display:flex;
margin-left:5px;
margin-right:5px;
`;

export const ItemMiniArea = styled.div`
margin-left:20px;

`;

export const ItemPhoto =styled.img`
width:65px;
height:65px;
object-fit: cover;
`;

export const ItemName = styled.div`
font-size:1.6rem;
font-weight:bold;
`;

export const ItemPrice = styled.div`
font-size: 1.4rem;

`;

export const ItemDescription = styled.div`
font-size: 1.1rem;
`;

export const ProductButton =styled.img`
width:15px;
`;