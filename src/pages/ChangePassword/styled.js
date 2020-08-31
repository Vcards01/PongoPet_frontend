import styled from 'styled-components'

export const Container = styled.div`
    width:90%;
    max-width:980px;
    margin:auto;
    display:flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 70px;
`;


export const StyledP = styled.p`
    color:red;
    display:none;
`;

export const StyledInput = styled.input`
&:required {
  box-shadow:none;
}
height:20px;
margin-top:10px;
margin-bottom:10px;
`;

export const StyledLabel = styled.label`
@media (max-width: 425px) {
    margin-left: 30px;
  }
margin-top: 7px;
`;