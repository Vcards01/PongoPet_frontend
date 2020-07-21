import React, {useState} from "react";
import api from './../../services/api'

import {Container,SubContainer,StyledForm ,StyledInput,StyledButton,StyledLabel,PError} from './styled'


export default function({setStatus}){

    const[TypeUser,setTypeUser] = useState("")
    const[name,setName] = useState("")
    const[petshop_name,setPetShop]= useState("")
    const[email,setEmail] = useState("")
    const[contact,setcontato]=useState("")
    const[password,setPassword] = useState("")

//Define uma função para dar um time sleep
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

//Verifica se as senhas digitadas correspondem
    function handleCheck(value){
        if (value===password){
            document.getElementById("senhaError").style.display = "none";
        }
        else{
            document.getElementById("senhaError").style.display = "block";
        }
    }

//Verifica se a senha tem ao menos 8 caracteres
    function handleCheckPassword(value){
        setPassword(value)
        if (value.length >= 8){
            document.getElementById("senhaPequena").style.display = "none";
        }
        else{
            document.getElementById("senhaPequena").style.display = "block";
        }
    }

//Função que faz o envio dos dados do cadastro para a API
    async function handleSubmit(event){
        event.preventDefault();
        if(TypeUser === "cliente"){
            const responseApi =  await api.post("/registerCliente",{
                email:email,
                name:name,
                password:password,
            })
            responseApi.then((response)=>{
                document.getElementById("emailError").style.display = "none";
                document.getElementById("cadastrado").style.display = "block";
                document.getElementById("cadastrado").style.color = "green";
                sleep(3000);
                setStatus(false)
                document.getElementById("cadastrado").style.display = "none";
            }).catch((error)=>{
                document.getElementById("emailError").style.display = "block";
            })
            
        }
        else{
            const response =  await api.post("/registerPetShop",{
                email:email,
                name:name,
                password:password,
                petshop_name:petshop_name,
                contact:[contact],
            })
            if(response["data"]['exists']){
                document.getElementById("emailError").style.display = "block";
            }
            else{
                document.getElementById("emailError").style.display = "none";
                document.getElementById("cadastrado").style.display = "block";
                document.getElementById("cadastrado").style.color = "green";
                await sleep(3000);
                setStatus(false)
                document.getElementById("cadastrado").style.display = "none";
            }
        }
        window.location.reload();
    }


    return(
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                    <PError id="cadastrado">Cadastro realizado,agora faça login!</PError>
                    <label>Tipo de usuario:</label>
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
                {
                    (TypeUser==="petshop")?
                    <>
                    <StyledLabel>Nome do Proprietario:</StyledLabel>
                    <StyledInput type="text" name="name"placeholder="Seu nome aqui!" onChange={event => setName(event.target.value)} />
                    <StyledLabel>Nome do PetShop</StyledLabel>
                    <StyledInput type="text" name="petshop"placeholder="Seu estabelecimento aqui!" onChange={event => setPetShop(event.target.value)}/>
                    <StyledLabel>Telefone do PetShop</StyledLabel>
                    <StyledInput type="text" name="contato"placeholder="ex:9999999999" onChange={event=>setcontato(event.target.value)}/>
                    <StyledLabel>Email:</StyledLabel>
                    <StyledInput type="email" name="email"placeholder="Seu melhor email!" onChange={event => setEmail(event.target.value)}/>
                    <PError id="emailError">Esse email já esta cadastrado!</PError>
                    <StyledLabel>Senha:</StyledLabel>
                    <StyledInput type="password" name="password" placeholder="Uma senha bem forte" onChange={event => handleCheckPassword(event.target.value)} />
                    <PError id="senhaPequena">A senha deve ter ao menos 8 caracteres</PError>
                    <StyledLabel>Repita a senha:</StyledLabel>
                    <StyledInput type="password" name="password_check" placeholder="Uma senha bem forte" onChange={event => handleCheck(event.target.value)}/>
                    <PError id="senhaError">As senhas não estão iguais!</PError>
                    <StyledButton>Cadastrar</StyledButton></>:
                    (TypeUser==="cliente")?
                    <>
                    <StyledLabel>Nome Completo:</StyledLabel>
                    <StyledInput type="text" name="name"placeholder="Seu nome aqui!" onChange={event => setName(event.target.value)}/>
                    <StyledLabel>Email:</StyledLabel>
                    <StyledInput type="email" name="email"placeholder="Seu melhor email!" onChange={event => setEmail(event.target.value)}/>
                    <PError id="emailError">Esse email já esta cadastrado!</PError>
                    <StyledLabel>Senha:</StyledLabel>
                    <StyledInput type="password" name="password" placeholder="Uma senha bem forte" onChange={event => handleCheckPassword(event.target.value)} />
                    <PError id="senhaPequena">A senha deve ter ao menos 8 caracteres</PError>
                    <StyledLabel>Repita a senha:</StyledLabel>
                    <StyledInput type="password" name="password_check" placeholder="Uma senha bem forte" onChange={event => handleCheck(event.target.value)}/>
                    <PError id="senhaError">As senhas não estão iguais!</PError>
                    <StyledButton>Cadastrar</StyledButton>
                    </>:<></>
                }
            </StyledForm>
        </Container>
    );
}