import styled from 'styled-components';
import logo_s from './../../assets/Logo_mobile.png'


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