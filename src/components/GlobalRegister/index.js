import React, {useState} from "react";
import api from '../../services/api'
import * as boots from 'react-bootstrap'

import {Container,SubContainer,ContainerBtn,StyledForm ,StyledInput,StyledButton,StyledLabel,PError} from './styled'


export default function({setStatus}){

    const[typeUser,setTypeUser] = useState("")
    const[name,setName] = useState("")
    const[petshop_name,setPetShop]= useState("")
    const[email,setEmail] = useState("")
    const[contact,setcontato]=useState("")
    const[password,setPassword] = useState("")
    const[loading,setLoading]=useState(false);


    //Função que faz o envio dos dados do cadastro para a API
    async function handleSubmit(event){
        event.preventDefault();
        setLoading(true)
        let data
        switch(typeUser) {
            case 'cliente':
                data={email,name,password,type:typeUser}
                break;
            case 'petshop':
                data={email,name,password,petshop_name,contact,type:typeUser,}
                break;
            default:
                break;
        }
        const response=  await api.post("/user/register",data)
        if(response.data.status==="400")
        {
            if(response.data.error==="Email invalido")
            {
                document.getElementById("emailError2").style.display = "block";
                document.getElementById("emailError2").style.color = "red";
            }
            else{
                document.getElementById("emailError").style.display = "block";
            }

        }
        else{
            document.getElementById("emailError").style.display = "none";
            document.getElementById("cadastrado").style.display = "block";
            document.getElementById("cadastrado").style.color = "green";
            await sleep(3000);
            setStatus(false)
            document.getElementById("cadastrado").style.display = "none";
            window.location.reload();
        }     
    }

    //Define uma função para dar um time sleep
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //Verifica se as senhas digitadas correspondem
    function handleCheck(value){
        if (value===password){
            document.getElementById("senhaError").style.display = "none";
            document.getElementById("cadastrar").disabled = false;
        }
        else{
            document.getElementById("senhaError").style.display = "block";
            document.getElementById("senhaError").style.color = "red";
            document.getElementById("cadastrar").disabled = true;
        }
    }

    //Verifica se a senha tem ao menos 8 caracteres
    function handleCheckPassword(value){
        setPassword(value)
        if (value.length >= 8){
            document.getElementById("senhaPequena").style.display = "none";
            document.getElementById("cadastrar").disabled = false;
        }
        else{
            document.getElementById("senhaPequena").style.display = "block";
            document.getElementById("senhaPequena").style.color = "red";
            document.getElementById("cadastrar").disabled = true;
        }
    }

    function handleCheckEmail(value){
        document.getElementById("emailError").style.display = "none";
        setEmail(value)
    }

    function mascaraDeTelefone(telefone){
        let textoAjustado=telefone.replace(/\-/g, '');
        textoAjustado=textoAjustado.replace(/\(/g, '');
        textoAjustado=textoAjustado.replace(/\)/g, '');
        console.log(textoAjustado)
        const isCelular = textoAjustado.length === 11?true:false;
        console.log(isCelular)
        if(isCelular) {
            if(textoAjustado.length===11){
            const parte0 = textoAjustado.slice(0,2)   
            const parte1 = textoAjustado.slice(2,7);
            const parte2 = textoAjustado.slice(7,12);
            textoAjustado = `(${parte0})${parte1}-${parte2}`
            setcontato(textoAjustado); 
            }
        } else {
            if(textoAjustado.length===10){
            const parte0 = textoAjustado.slice(0,2) 
            const parte1 = textoAjustado.slice(2,6);
            const parte2 = textoAjustado.slice(6,10);
            textoAjustado = `(${parte0})${parte1}-${parte2}`
            setcontato(textoAjustado); 
            }
        }if(textoAjustado.length<10){
            setcontato(textoAjustado); 
        }
       
    }


    return(
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                    <PError id="cadastrado">Cadastro realizado,um email de confirmação foi enviado!</PError>
                    <label>Tipo de usuário:</label>
                <SubContainer>
                    <label>
                        <input  type="radio" 
                                value="petshop" 
                                name="user" 
                                onChange={event => setTypeUser(event.target.value)} 
                        />
                        PetShop
                    </label>
                    <label>
                        <input  type="radio" 
                                value="cliente" 
                                name="user" 
                                onChange={event => setTypeUser(event.target.value)}
                        />
                        Cliente
                    </label>
                </SubContainer>
                {
                    (typeUser==="petshop")?
                    <>
                        <StyledLabel>Nome do Proprietario:</StyledLabel>
                        <StyledInput type="text"
                                    name="name"
                                    placeholder="Seu nome aqui!" 
                                    onChange={event => setName(event.target.value)}
                                    required
                        />
                        <StyledLabel>Nome do PetShop</StyledLabel>
                        <StyledInput type="text" 
                                    name="petshop"
                                    placeholder="Seu estabelecimento aqui!" 
                                    onChange={event => setPetShop(event.target.value)}
                                    required
                        />
                        <StyledLabel>Telefone do PetShop</StyledLabel>
                        <StyledInput type="text" 
                                    name="contato"
                                    value={contact}
                                    placeholder="99 9999999 ou 99 999999999"
                                    onChange={event=>mascaraDeTelefone(event.target.value)}
                                    required
                        />
                        <StyledLabel>Email:</StyledLabel>
                        <StyledInput type="email" 
                                    name="email"
                                    placeholder="Seu email!" 
                                    onChange={event => handleCheckEmail(event.target.value)}
                                    required
                        />
                        <PError id="emailError">Esse email já esta cadastrado!</PError>
                        <PError id="emailError2">Email Invalido!</PError>
                        <StyledLabel>Senha:</StyledLabel>
                        <StyledInput type="password" 
                                    name="password" 
                                    placeholder="Uma senha bem forte" 
                                    onChange={event => handleCheckPassword(event.target.value)} 
                                    required
                        />
                        <PError id="senhaPequena">A senha deve ter ao menos 8 caracteres</PError>
                        <StyledLabel>Repita a senha:</StyledLabel>
                        <StyledInput type="password" 
                                    name="password_check" 
                                    placeholder="Uma senha bem forte" 
                                    onChange={event => handleCheck(event.target.value)}
                                    required
                        />
                        <PError id="senhaError">As senhas não estão iguais!</PError>
                        <ContainerBtn>
                            <StyledButton id="cadastrar">Cadastrar</StyledButton>
                            {loading?<boots.Spinner animation="border" />:<></>}
                        </ContainerBtn></>:
                    
                    (typeUser==="cliente")?
                    <>
                        <StyledLabel>Nome Completo:</StyledLabel>
                        <StyledInput type="text" 
                                     name="name"
                                     placeholder="Seu nome aqui!" 
                                     onChange={event => setName(event.target.value)}
                                     required
                        />
                        <StyledLabel>Email:</StyledLabel>
                        <StyledInput type="email" 
                                     name="email"
                                     placeholder="Seu melhor email!" 
                                     onChange={event => handleCheckEmail(event.target.value)}
                                     required
                        />
                        <PError id="emailError">Esse email já esta cadastrado!</PError>
                        <PError id="emailError2">Email Invalido!</PError>
                        <StyledLabel>Senha:</StyledLabel>
                        <StyledInput type="password" 
                                     name="password" 
                                     placeholder="Uma senha bem forte" 
                                     onChange={event => handleCheckPassword(event.target.value)} 
                                     required
                        />
                        <PError id="senhaPequena">A senha deve ter ao menos 8 caracteres</PError>
                        <StyledLabel>Repita a senha:</StyledLabel>
                        <StyledInput type="password" 
                                     name="password_check" 
                                     placeholder="Uma senha bem forte" 
                                     onChange={event => handleCheck(event.target.value)}
                                     required
                        />
                        <PError id="senhaError">As senhas não estão iguais!</PError>
                        <ContainerBtn>
                            <StyledButton id="cadastrar">Cadastrar</StyledButton>
                            {loading?<boots.Spinner animation="border" />:<></>}
                        </ContainerBtn>
                    </>:
                    <></>
                }
            </StyledForm>
        </Container>
    );
}