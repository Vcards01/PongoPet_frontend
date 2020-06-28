import styled from 'styled-components';

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
`;

export const StyledListItens = styled.li`
display: block;
cursor: pointer;
`;

export const StyledLink = styled.a`
&:hover {
  background-color: #ffb74e;
};
padding: 15px;
text-transform: uppercase;
font-size: 1.4rem;
color:#231f20;
text-decoration:none;
`;