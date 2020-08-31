import styled from 'styled-components';


export const Container = styled.div`
width:90%;
max-width:980px;
margin:auto;
`;

export const SubContainer=styled.div`
@media (max-width: 1023px) {
  flex-direction: column;
  text-align:center;
}
text-align:center;
width:90%
max-width:980px;
display:flex;
width:90%
max-width:980px;
justify-content: space-between;
`;


export const MainImg = styled.img`
@media (max-width: 1023px) {
  margin:auto;
  order:-1;
}
@media (max-width: 767px) {
  height:280px;
  margin:auto;
}
@media (max-width: 425px) {
  height:200px;
  margin:auto;
}
  margin-top:70px;
  height:400px;
`;
export const SecondImg = styled.img`
@media (max-width: 1023px) {
  margin:auto;
}
margin-top:70px;
height:300px;
width:300px;
`;

export const LoginContainer= styled.div`
@media (max-width: 1023px) {
  margin:auto;
}
@media (max-width: 767px) {
  width:300px;
  margin:auto;
}
width:450px;
height:420px;
background-color:#ffffff;
margin-top:40px;
border-radius:20px;
`;

export const StyledP = styled.p`
@media (max-width: 1023px) {
  padding-top:50px;
}
margin:auto;
font-size:1.6rem;
padding-top:100px;
`;