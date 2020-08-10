import styled from 'styled-components';

export const Container= styled.div`
@media (max-width: 425px) {
    width: 270px;
    margin-left: 5px;
  }
  margin-top:15px;
  background-color:${props=>props.isWhite? "#ffffff" : ""};
  border-radius:10px;
  box-shadow:${props=>props.isWhite?"0px 3px 6px rgba(0,0,0,0.16)":""};
  padding:20px;
  text-align:center;
  display: flex;
  flex-direction: column;
  `;

export const StyledForm = styled.form`
padding:20px;
text-align:center;
height:100%;
display: flex;
flex-direction: column;
width: 250px;
`;

export const StyledInput = styled.input`
&:required {
  box-shadow:none;
}
height:20px;
width:80%;
margin:auto;
margin-top:10px;
`;

export const StyledLabel = styled.label`
@media (max-width: 425px) {
    margin-left: 30px;
  }
text-align:left;
margin-top: 7px;
margin-left: 20px;
`;

export const StyledH3 = styled.h3`
text-decoration: underline;
`;

export const StyledP = styled.p`
text-decoration: underline;
cursor:pointer;

`;

export const AreaButton=styled.div`
display:${props=>props.isNew ? "none" : "flex"};
`;

export const StyledButton = styled.button`
display:${props=>props.isEdit ? "none" : "block"};
height:40px;
width:${props=>props.small ? "40%" : "80%"};
margin: 10px auto;
background-color:#FFB74E;
color:#000000;
border:0;
border-radius:10px;
cursor: pointer;
&:hover {
    background-color: #fca428;
};
`;

export const ElementArea = styled.div`
    margin-top:20px;
    margin-bottom:20px;
`;

export const ElementList = styled.div`

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

