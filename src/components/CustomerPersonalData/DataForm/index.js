import React, {useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {StyledForm,StyledLabel,StyledInput,StyledH3,StyledP,StyledButton } from '../../GlobalComponents/styeld'
import {ContainerBtn} from "./styled"
import * as boots from 'react-bootstrap'
import api from "../../../services/api"

export default function({name,email,id,type,setName,setEmail,setStatus})
{

    const [tempName,setTempName]= useState(name)
    const [tempEmail,setTempEmail]= useState(email)
    const [password,setPassword]=useState("")
    const [newPassword,setNewPassword]=useState(undefined)
    const dispatch = useDispatch()
    const[loading,setLoading]=useState(false);
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
        setLoading(true)
        let data={email:tempEmail.trim(),name:tempName.trim(),password,type,newPassword,id}
        const response=  await api.post("/user/update",data)
        if(response.data.status==="400")
        {
            document.getElementById("PassError").style.display = "block";
            document.getElementById("PassError").style.color = "red";
        }
        else{
            setEmail(tempEmail.trim())
            setName(tempName.trim())
            dispatch({
                type:'SET_DATA',
                    payload:{
                        name:tempName.trim(),
                        email:tempEmail.trim(),
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

    function changePass(value)
    {
        document.getElementById("PassError").style.display = "none";
        setPassword(value)
    }

    function changeName(value)
    {
        let val = value.trim()
        value=value.replace("*","").replace("-","").replace("+","").replace("=","").replace(";","").replace(",","").replace("\\","").replace("?","").replace("!","").replace("@","").replace("#","").replace("¨","").replace("(","").replace(")","").replace("%","").replace("$","").replace("_","").replace("º","").replace("ª","").replace(".","").replace("[","").replace("]","").replace("{","").replace("}","").replace("<","").replace(">","").replace("|","").replace("'","").replace('"',"").replace("§","").replace("°","").replace("&","").replace(":","").replace("¹","").replace("²","").replace("³","").replace("£","").replace("¢","").replace("¢","").replace("¬","").replace("©","")
        if(val.length>0)
        {
            if(val.length<=45){
                setTempName(value)
            }
        }
        else{
            setTempName(val)
        }
        
    }


    return(

        <StyledForm onSubmit={handleSubmit}>
            <p id="PassError">Senha incorreta!</p><br/>
            <p id="PassOK">Alterado com sucesso!</p><br/>
            <p id="emailError">Email Invalido!</p>
            <StyledH3>DADOS</StyledH3>
            <StyledLabel>Nome:</StyledLabel><br/>
            <StyledInput isZero={true} type="text" value={tempName} onChange={event => changeName(event.target.value)} required/>
            <StyledLabel>Email:</StyledLabel><br/>
            <StyledInput type="text" value={tempEmail} disabled/>
            <StyledP id="changePass" onClick={handleEditPassword}>Alterar Senha?</StyledP><br/>
            <StyledLabel id='NewPasswordOld'>Antiga Senha:</StyledLabel><br/>
            <StyledInput isZero={true} id='NewPasswordOldInput'type="password" onChange={event => changePass(event.target.value)}/>
            <StyledLabel id='NewPasswordNew'>Nova Senha:</StyledLabel><br/>
            <StyledInput isZero={true} id='NewPasswordNewInput'type="password" onChange={event => setNewPassword(event.target.value)}/>
            <StyledLabel id='confirmPasswordInput'>Senha para confirmar:</StyledLabel><br/>
            <StyledInput isZero={true} id='confirmPassword'type="password" onChange={event => changePass(event.target.value)} required/>
            <ContainerBtn>
                <StyledButton>Salvar</StyledButton>
                {loading?<boots.Spinner animation="border" />:<></>}
            </ContainerBtn>
        </StyledForm>
    )
}