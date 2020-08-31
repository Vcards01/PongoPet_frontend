import styled from "styled-components"

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
    background-color:#ffffff;
    border-radius:15px;
    box-shadow:0px 3px 6px rgba(0,0,0,0.16);
    padding:10px;
    display:flex;
    align-items:center;
    cursor:pointer;
    `;

export const ItemPhotoArea = styled.div`
    width:65px;
    height:65px;
`;

export const ItemInfoArea = styled.div`
    flex:1;
    margin-left:5px;
    margin-right:5px;
`;

export const ItemButtomArea = styled.div`
    
`;

export const ItemPhoto =styled.img`
    width:65px;
    height:65px;
    object-fit: cover;
`;

export const ItemName = styled.div`
    font-size:2rem;
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


    
    
    