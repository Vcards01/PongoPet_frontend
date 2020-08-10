import styled from 'styled-components'

export const Container = styled.div`
    padding:20px
`;
export const ItemArea= styled.div`
@media (max-width: 767px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
height: 200px;
display:flex;

`;
export const ItemButtons=styled.div`
@media (max-width: 767px) {
  margin-top:60px;
}
margin-top:10px;
display:flex;
justify-content:flex-end;
align-items:center;
`;

export const ItemPhoto = styled.img`
@media (max-width: 767px) {
    width: 150px;
    height: 110px;
  }
width:200px;
object-fit: contain;
border-radius:10px;
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
@media (max-width: 767px) {
    margin-top:10px;
  }
display:flex;
justify-content: space-between;
`;

export const ItemName = styled.div`
@media (max-width: 767px) {
    font-size: 1.8rem;
  }
font-size: 3rem;
font-weight: bold;
`;

export const ItemDescription = styled.div`
@media (max-width: 767px) {
    font-size: 1.2rem;
  }
font-size 1.4rem;
`;

export const ItemButton = styled.button`
@media (max-width: 767px) {
    margin-top:10px;
    font-size:${props=>props.small ? "1.2rem" : "1.2rem"};
  }
    border:0px;
    background-color:#dbc33b;
    box-shadow: 4px 5px 0px #333;
    color:#000;
    font-size:${props=>props.small ? "1.2rem" : "2.2rem"};
    font-weight: bold;
    padding:${props=>props.small ? "5px 10px" : "10px 20px"};
    margin-left:10px;
    margin-right:${props=>props.small ? "30px" : ""};
    border-radius:5px;
    cursor:pointer;
`;

export const ItemQuantity = styled.div`
    display:flex;
    align-items:center;
    margin-right:20px;
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
@media (max-width: 767px) {
    margin-left:10px;
    font-size:${props=>props.small ? "1.3rem" : "1.5rem"};
  }
font-size:${props=>props.small ? "1.6rem" : "3rem"};
margin-top:${props=>props.small ? "15px" : ""};
font-weight:${props=>props.small ? "" : "bold"};
`;