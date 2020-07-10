import styled from 'styled-components';
import logo from './assets/Logo.png'


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
