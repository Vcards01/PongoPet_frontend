import styled from 'styled-components';
import search from './../../assets/search.png'

export const StyledNav = styled.nav`
background-color: #feed84;
@media (max-width: 767px) {
    display:none;
  }
`;

export const StyledList = styled.ul`
margin-top:30px;
display: flex;
flex-wrap: wrap;
align-items:center;
`;

export const StyledListItens = styled.li`
display: block;
cursor: pointer;
`;

export const StyledLink = styled.a`
&:hover {
  background-color: #ffb74e;
};
padding: 10px;
margin: 15px;
border-radius:10px;
text-transform: uppercase;
font-size: 1.4rem;
color:#231f20;
text-decoration:none;
`;

export const SearchInput = styled.input`
border:0;
border-radius:25px;
width:${props=>props.active? 200:0}px;
cursor:${props=>props.active?'text':'pointer'};
height: 30px;
background-color:#FFF;
background-image: url(${search});
background-size:20px;
background-repeat: no-repeat;
background-position: 10px center;
outline:0;
padding-left:50px;
transition: all ease .2s;

`;

export const Exitimg = styled.img`
    height: 24px;
    margin-left:10px;
`;