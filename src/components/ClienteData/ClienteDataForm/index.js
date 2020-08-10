import React, {useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {StyledForm,StyledLabel,StyledInput,StyledH3,StyledP,StyledButton } from '../../GlobalComponents/styeld'
import api from "../../../services/api"

export default function({name,email,id,type,setName,setEmail,setStatus})
{

    const [tempName,setTempName]= useState(name)
    const [tempEmail,setTempEmail]= useState(email)
    const [password,setPassword]=useState("")
    const [newPassword,setNewPassword]=useState(undefined)
    const dispatch = useDispatch()
    var enableEdit=false;

    useEffect(()=>{
        document.getElementById("NewPasswordOld").style.display = "none";
        document.getElementById("NewPasswordOldInput").style.display = "none";
        document.getElementById("NewPasswordNew").style.display = "none";
        document.getElementById("NewPasswordNewInput").style.display = "none";
        document.getElementById("PassError").style.display = "none";
        document.getElementById("emailError").style.display = "none";
        document.getElementById("PassOK").style.display="none";
    },[]);

    async function handleSubmit(event){
        event.preventDefault();
        let data={email:tempEmail,name:tempName,password,type,newPassword,id}
        const response=  await api.post("/update",data)
        if(response.data.status==="400")
        {
            document.getElementById("PassError").style.display = "block";
            document.getElementById("PassError").style.color = "red";
        }
        else{
            setEmail(tempEmail)
            setName(tempName)
            dispatch({
                type:'SET_DATA',
                    payload:{
                        name:tempName,
                        email:tempEmail,
                    }
                });
            document.getElementById("PassOK").style.display="block";
            document.getElementById("PassOK").style.color = "green";
            await sleep(3000);
            setStatus(false)
            window.location.reload();
        }
        
    }
   
    function handleEditPassword()
    {
        if(!enableEdit){
            document.getElementById("NewPasswordOld").style.display = "block";
            document.getElementById("NewPasswordOldInput").style.display = "block";
            document.getElementById("NewPasswordNew").style.display = "block";
            document.getElementById("NewPasswordNewInput").style.display = "block";
            document.getElementById("confirmPassword").style.display="none";
            document.getElementById("confirmPasswordInput").style.display="none";
            document.getElementById("changePass").innerHTML="Voltar";
            enableEdit=true;
        }
        else
        {
            document.getElementById("NewPasswordOld").style.display = "none";
            document.getElementById("NewPasswordOldInput").style.display = "none";
            document.getElementById("NewPasswordNew").style.display = "none";
            document.getElementById("NewPasswordNewInput").style.display = "none";
            document.getElementById("confirmPassword").style.display="block";
            document.getElementById("confirmPasswordInput").style.display="block";
            document.getElementById("changePass").innerHTML="Alterar senha?";
            enableEdit=false;
        }

    }

    //Define uma função para dar um time sleep
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(

        <StyledForm onSubmit={handleSubmit}>
            <p id="PassError">Senha incorreta!</p><br/>
            <p id="PassOK">Alterado com sucesso!</p><br/>
            <p id="emailError">Email Invalido!</p>
            <StyledH3>DADOS</StyledH3>
            <StyledLabel>Nome:</StyledLabel><br/>
            <StyledInput type="text" value={tempName} onChange={event => setTempName(event.target.value)}/>
            <StyledLabel>Email:</StyledLabel><br/>
            <StyledInput type="text" value={tempEmail} onChange={event => setTempEmail(event.target.value)}/>
            <StyledP id="changePass" onClick={handleEditPassword}>Alterar Senha?</StyledP><br/>
            <StyledLabel id='NewPasswordOld'>Antiga Senha:</StyledLabel><br/>
            <StyledInput id='NewPasswordOldInput'type="password" onChange={event => setPassword(event.target.value)}/>
            <StyledLabel id='NewPasswordNew'>Nova Senha:</StyledLabel><br/>
            <StyledInput id='NewPasswordNewInput'type="password" onChange={event => setNewPassword(event.target.value)}/>
            <StyledLabel id='confirmPasswordInput'>Senha para confirmar:</StyledLabel><br/>
            <StyledInput id='confirmPassword'type="password" onChange={event => setPassword(event.target.value)}/>
            <StyledButton>Salvar</StyledButton>
        </StyledForm>
    )
}