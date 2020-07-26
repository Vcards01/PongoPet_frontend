import styled from 'styled-components'

export const StyledP = styled.p`
&:hover{
    background-color: #ffb74e;
}
background-color: ${props=>props.active === props.title?"#ffb74e":""};
cursor: pointer;
border-radius:10px;
margin: 15px;
padding: 10px;
transition: all ease .3s;
`