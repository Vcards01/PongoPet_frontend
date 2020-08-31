import styled from 'styled-components';

export const StyledForm = styled.form`
text-align:center;
height:100%;
display: flex;
flex-direction: column;
`;

export const SubContainer = styled.div`
margin:10px;
justify-content: space-between;
`;

export const StyledInput = styled.input`
height:20px;
width:80%;
margin:auto;
margin-top: 3px;
margin-bottom: 3px;
`;

export const StyledButton = styled.button`
height:40px;
width:70%;
margin:auto;
background-color:#FFB74E;
color:#000000;
border:0;
border-radius:10px;
cursor: pointer;
&:hover {
    background-color: #fca428;
};
`;

export const StyledLabel = styled.label`
@media (max-width: 425px) {
    margin-left: 30px;
  }
text-align:left;
margin-left: 40px;
margin-top: 5px;
`;

export const StyledU = styled.u`
cursor: pointer;
`;

export const StyledP = styled.p`
font-size:1.4rem;
display: none;
`;

export const StyledPara = styled.p`
`;

export const ContainerBtn = styled.div`
  display:flex;
  align-items: center;

`;