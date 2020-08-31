import React,{useState} from 'react'
import {Container,StyledP,StyledInput,StyledLabel} from './styled'
import {StyledButton} from '../../components/GlobalComponents/styeld'
import api from "../../services/api"
import { useHistory} from "react-router-dom";

export default function({setNavStatus,setFooterStatus})
{
    setNavStatus("pass")
    setFooterStatus("pass")


    const[password,setPassword] = useState("")
    const history = useHistory();

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function handleSubmit()
    {
        try{
            var url =window.location.href.split("token?")[1]
            let token = url.split("email?")[0]
            let email = url.split("email?")[1].split("type?")[0]
            let type = url.split("email?")[1].split("type?")[1]
            console.log(token)
            console.log(email)
            console.log(type)
            const response = await api.post("/user/update_pass/update",{token:token,email:email,type:type,pass:password})
            if(response.data.status==="401")
            {
                document.getElementById("TokenErro").style.display="block"
            }
            else{
                document.getElementById("TokenOK").style.display="block"
                document.getElementById("TokenOK").style.color="green"
                await sleep(3000)
                history.push("/")
            }
        }
        catch{
            document.getElementById("TokenErro").style.display="block"
        }
        
    }


    function handleCheck(value){
        if (value===password){
            document.getElementById("senhaError").style.display = "none";
            document.getElementById("enviar").disabled = false;
        }
        else{
            document.getElementById("senhaError").style.display = "block";
            document.getElementById("senhaError").style.color = "red";
            document.getElementById("enviar").disabled = true;
        }
    }
        //Verifica se a senha tem ao menos 8 caracteres
    function handleCheckPassword(value){
        setPassword(value)
        if (value.length >= 8){
            document.getElementById("senhaPequena").style.display = "none";
            document.getElementById("enviar").disabled = false;
        }
        else{
            document.getElementById("senhaPequena").style.display = "block";
            document.getElementById("senhaPequena").style.color = "red";
            document.getElementById("enviar").disabled = true;
        }
    }

    return(
        <Container>
            <StyledLabel>Senha:</StyledLabel>
            <StyledInput type="password" 
                        name="password" 
                        placeholder="Uma senha bem forte" 
                        onChange={event => handleCheckPassword(event.target.value)} 
                        required
            />
            <StyledP id="senhaPequena">A senha deve ter ao menos 8 caracteres</StyledP>
            <StyledLabel>Repita a senha:</StyledLabel>
            <StyledInput type="password" 
                        name="password_check" 
                        placeholder="Uma senha bem forte" 
                        onChange={event => handleCheck(event.target.value)}
                        required
            />
            <StyledP id="senhaError">As senhas não estão iguais!</StyledP>
            <StyledButton small={true} id="enviar" onClick={handleSubmit}>Enviar</StyledButton>
            <StyledP id="TokenErro">Token invalido!</StyledP>
            <StyledP id="TokenOK">Confirmado com sucesso!</StyledP>
        </Container>
    )
}