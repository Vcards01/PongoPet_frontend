import styled from 'styled-components';

export const StyledTextArea = styled.textarea`
    resize: none;
    &:required {
        box-shadow:none;
    }
    height:70px;
    width:85%;
    margin:auto;
    margin-top:10px;
`;

export const StyledSelect =styled.select`
&:required {
    box-shadow:none;
  }
  height:30px;
  width:85%;
  margin:auto;
  margin-top:10px;
`;

export const FileLabel = styled.label`
  margin-botton:20px;
  border: ${props=>props.hasThumb ? "" : "1px dashed #ddd"};
  background-size:cover;
  cursor:pointer;
  display:flex;
  height:160px;
  justify-content:center;
  aling-itens:center;
`;

export const FileInput = styled.input`
display:none;
`;

export const FileImg = styled.img`
  display:${props=>props.hasThumb ? "none" : "block"};
`;