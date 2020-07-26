import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import api from './../../services/api'
import {StyledForm,StyledInput,StyledButton,StyledLabel,StyledU,SubContainer,StyledP} from './styled'
import {useDispatch} from 'react-redux'

export default function ({setStatus}) {

    const dispatch = useDispatch()
    const history = useHistory();
    const[typeUser,setTypeUser] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")



    const handleCadastrar=(e)=>{
            setStatus(true)
        }   

    async function handleSubmit(event){
        event.preventDefault();
        const response =  await api.post("/auth",{email,password,type:typeUser,})
        if(response.data.status==="400"){
            document.getElementById("exists").style.display = "block";
            document.getElementById("exists").style.color = "red";
        }
        else{
            let token="Bearer "+response.data.token
            dispatch({
                type:'SET_TOKEN',
                    payload:{
                        token,
                        userType:typeUser
                    }
                });
            switch(typeUser) {
                case 'cliente':
                    history.push("/Cliente")
                    break;
                case 'petshop':
                    history.push("/Petshop")
                    break;
            }
        }       
    }

    return (
        <StyledForm onSubmit={handleSubmit}>
            <h1>Login</h1>
            <StyledP id="exists">Usuario ou senha incorreto</StyledP>
            <StyledLabel>Email:</StyledLabel>
            <StyledInput id="login" type="email" name="email"placeholder="Seu melhor email!" onChange={event => setEmail(event.target.value)}/>
            <StyledLabel>Senha:</StyledLabel>
            <StyledInput type="password" name="password" placeholder="Uma senha bem forte" onChange={event => setPassword(event.target.value)} />
            <StyledLabel>Tipo de usuário:</StyledLabel>
            <SubContainer>
                <label>
                    <input type="radio" value="petshop" name="user" onChange={event => setTypeUser(event.target.value)} />
                    PetShop
                </label>
                <label>
                    <input type="radio" value="cliente" name="user" onChange={event => setTypeUser(event.target.value)}/>
                    Cliente
                </label>
            </SubContainer>
            <p>Não tem uma conta?<StyledU onClick={handleCadastrar}>Cadastre-se aqui!</StyledU></p>
            <StyledButton>Entrar</StyledButton>
        </StyledForm>
    );}