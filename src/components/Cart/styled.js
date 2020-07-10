import styled from "styled-components";

export const CartArea = styled.div`
    background-color: #dbc33b;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    position: fixed;
    bottom:0;
    right: 30px;
`;
export const CartHeader = styled.div`
    height:40px;
    width:270px;
    display:flex;
    align-items: center;
    cursor:pointer;
`;

export const CartIcon = styled.img`
    width 23px;
    height:auto;
    margin-left:10px;
    margin-right:10px;
`;

export const CartText = styled.div`
    flex:1;
    font-size:1.7rem;
`;

export const CartBody = styled.div`
display:${props=>props.show?"block" : "none"};


`;

export const ItemArea =styled.div``;
export const    Item =styled.div`
    display:flex;
    margin:10px;

`;
export const    ItemPhoto = styled.img`
width:64px;
height:50px;
border-radius:10px;
`;
export const    ItemInfoArea = styled.div`
    flex:1;
    margin-left:10px;
`;
export const    ItemName =styled.div`
font-size:1.5rem;
font-weight:bold;
`;
export const    ItemPrice=styled.div`
font-size:1.3rem;
`;
export const    ItemQuantityArea=styled.div`
display:flex;
align-items:center;
`;

export const ItemQtIcon = styled.img`
width:12px;
height:auto;
cursor:pointer;
`;
export const ItemQt =styled.div`
font-size:1.3rem;
font-weight:bold;
margin 10px 5px;`;
