import styled from 'styled-components';

export const Container = styled.div`
margin: 30px;
`;

export const SubContainer = styled.div`
margin:10px;
justify-content: space-between;
`;

export const StyledForm = styled.form`
text-align:center;
height:100%;
display: flex;
flex-direction: column;
`;

export const StyledInput = styled.input`
height:20px;
width:300px;
margin:auto;
`;

export const StyledButton = styled.button`
height:40px;
width:80%;
margin: 10px auto;
background-color:#feed84;
color:1#000000;
border:0;
border-radius:10px;
cursor: pointer;
&:hover {
    background-color: #ffb74e;
};
`;

export const StyledLabel = styled.label`
@media (max-width: 425px) {
    margin-left: 10px;
  }
text-align:left;
margin-top:15px;
margin-bottom:5px;
`;

export const PError = styled.p`
font-size:1.4rem;
display: none;

`;

export const ContainerBtn = styled.div`
  display:flex;
  align-items: center;

`;