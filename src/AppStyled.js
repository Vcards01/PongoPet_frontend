import styled from 'styled-components';
import logo from './assets/Logo.png'
import logo_s from './assets/Logo_mobile.png'

export const Container = styled.div`
display: flex;
flex-direction: column;
background-color: #feed84;
height:100vh;
`;

export const Header = styled.header`
width:90%;
max-width:980px;
display:flex;
background-color: #feed84;
justify-content: space-between;
margin:auto;
`;

export const PageBody = styled.div`
display:flex;
background-color: #feed84;
flex:1;

`;
export const Footer= styled.footer`
@media (max-width: 425px) {
  flex-direction: column;
}
width:90%;
max-width:980px;
border-top:solid 1px #ffffff;
margin:auto;
margin-top:100px;
background-color: #feed84;
display:flex;
justify-content: space-between;
`;

export const Logo = styled.img.attrs({
    src: logo
})`
@media (max-width: 767px) {
  height:40px;
  margin:auto;
  padding-bottom:40px;
}
padding:10px;

`;

export const MiniLogo = styled.img.attrs({
  src: logo_s
})`
height:30px;
width:30px;
margin:auto;

`;

export const StyledP = styled.p`
@media (max-width: 425px) {
  text-align:center;
}
font-size:1.2rem;
margin: 10 auto;
`;

export const StyledA = styled.a`
font-size:1.2rem;
color:#231f20;
`;