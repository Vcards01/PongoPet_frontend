import styled from 'styled-components';

export const Container= styled.div`
@media (max-width: 425px) {
    width: 270px;
    margin-left: 5px;
  }
  margin-top:15px;
  border-radius:10px;
  padding:20px;
  text-align:center;
  display: flex;
  flex-direction: column;

`;

export const AddressArea = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`;

export const AddressList = styled.div`

    @media (max-width: 1023px) {
        grid-template-columns: repeat(1,1fr);
    }
    @media (max-width: 767px) {
        justify-items:center
    }
    display:grid;
    grid-template-columns: ${props=>props.size===1 ? "repeat(1,1fr);" : "repeat(2,1fr);"}
    grid-gap: 15px
    `;

export const StyledButton = styled.div`
    margin-top:15px;
    background-color:#FFB74E;
    border-radius:10px;
    width:300px;
    align-self: center;
    cursor:pointer;
    heigth:20px;

`;