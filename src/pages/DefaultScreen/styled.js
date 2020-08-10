import styled from 'styled-components';

export const Container = styled.div`
@media (max-width: 767px) {
    flex-direction:column;
    text-align:center;
  }
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-top:30px;
`;

export const StyledImg = styled.img`
@media (max-width: 767px) {
    margin-left:0;
    margin-right:0;
  }
  @media (max-width: 374px) {
    width:300px;
  }
    width:400px;
    margin-left:100px;
    margin-right:10px;
`;

export const StyledP = styled.p`
    font-size:2rem;
    margin-left:10px;
`;

export const StyledButton = styled.button`
@media (max-width: 767px) {
    display:block;
    width:280px;
    margin:10px;
  }
display:none;
height:40px;
width:80%;
margin:auto;
background-color:#feed84;
color:#000000;
border:0;
border-radius:10px;
cursor: pointer;
&:hover {
    background-color: #ffb74e;
};
`;

