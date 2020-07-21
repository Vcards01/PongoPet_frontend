import React, {useState} from "react";
import { useHistory} from "react-router-dom";
import api from './../../services/api'
import {StyledForm,StyledInput,StyledButton,StyledLabel,StyledU,SubContainer,StyledP} from './styled'

export default function ({setStatus}) {

    const history = useHistory();
    const[TypeUser,setTypeUser] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")



    const handleCadastrar=(e)=>{
            setStatus(true)
        }   

    async function handleSubmit(event){
            event.preventDefault();
            if(TypeUser === "cliente"){
                const response =  await api.post("/loginCliente",{
                    email:email,
                    password:password,
                })
                if(response["data"]['exists']){
                    if (response["data"]["token"]==="")
                    {
                        document.getElementById("exists").style.display = "block";
                        document.getElementById("exists").style.color = "red";
                    }
                    else{
                        history.push("/HomeU/")
                    }
                }
                else{
                    document.getElementById("exists").style.display = "block";
                    document.getElementById("exists").style.color = "red";
                }
            }
            else{
                const response =  await api.post("/loginPetShop",{
                    email:email,
                    password:password,
                })
                if(response["data"]['exists']){
                    if (response["data"]["token"]==="")
                    {
                        document.getElementById("exists").style.display = "block";
                        document.getElementById("exists").style.color = "red";
                    }
                    else{
                        history.push("/tela3/")
                    }
                }
                else{
                    document.getElementById("exists").style.display = "block";
                    document.getElementById("exists").style.color = "red";
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