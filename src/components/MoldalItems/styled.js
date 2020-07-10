import styled from 'styled-components'

export const Container = styled.div`
    width:640px;
    padding:20px
`;
export const ItemArea= styled.div`
height: 200px;
display:flex;
`;
export const ItemButtons=styled.div`
margin-top:10px;
display:flex;
justify-content:flex-end;
align-items:center;
`;

export const ItemPhoto = styled.img`
width:310px;
border-radius:10px
`;

export const ItemInfoArea = styled.div`
flex: 1;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-left:10px;
`;

export const ItemDetails = styled.div`
`;

export const ItemQuantityArea = styled.div`
height:50px;
display:flex;
justify-content: space-between;
`;

export const ItemName = styled.div`
font-size: 3rem;
font-weight: bold;
`;

export const ItemDescription = styled.div`
font-size 1.4rem;
`;

export const ItemButton = styled.button`
    border:0px;
    background-color:#dbc33b;
    box-shadow: 4px 5px 0px #333;
    color:#000;
    font-size:${props=>props.small ? "1.3rem" : "2.2rem"};
    font-weight: bold;
    padding:${props=>props.small ? "5px 10px" : "10px 20px"};
    margin-left:10px;
    border-radius:5px;
    cursor:pointer;
`;

export const ItemQuantity = styled.div`
    display:flex;
    align-items:center;
`;
export const ItemQtImage = styled.img`
    width:24px;
    height:auto;
    margin-left:10px;
    margin-right:10px;
    cursor:pointer;
`;
export const ItemQtText = styled.div`
    font-size:2.5rem
    font-weight: bold;
`;
export const ItemPrice = styled.div`
font-size:${props=>props.small ? "1.6rem" : "3rem"};
margin-top:${props=>props.small ? "15px" : ""};
font-weight:${props=>props.small ? "" : "bold"};
`;