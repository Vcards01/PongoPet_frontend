import React, {useState,useEffect} from "react";
import {useDispatch} from 'react-redux'
import {Container,StyledForm,StyledLabel,StyledInput,StyledH3,StyledP,StyledButton } from '../../GlobalComponents/styeld'
import api from "../../../services/api"
import {ContainerBtn} from "./styled"
import * as boots from 'react-bootstrap'

export default function({name,email,petName,contato,id,type,setName,setEmail,setPetName,setContato,setStatus})
{

    const [tempName,setTempName]= useState(name)
    const [tempEmail,setTempEmail]= useState(email)
    const [tempPetName,setTempPetName] = useState(petName)
    const [tempContato,setTempContato] = useState(contato)
    const [password,setPassword]=useState("")
    const [newPassword,setNewPassword]=useState(undefined)
    const[loading,setLoading]=useState(false);
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
        setLoading(true)
        let data={email:tempEmail,name:tempName,contact:tempContato,petName:tempPetName,password,type,newPassword,id}
        const response=  await api.post("/user/update",data)
        if(response.data.status==="400")
        {
            document.getElementById("PassError").style.display = "block";
            document.getElementById("PassError").style.color = "red";
        }
        else{
            setEmail(tempEmail)
            setName(tempName)
            setPetName(tempPetName)
            setContato(tempContato)
            dispatch({
                type:'SET_DATA',
                    payload:{
                        name:tempName,
                        email:tempEmail,
                        contato:tempContato,
                        petshop_name:tempPetName,
                    }
                });
            document.getElementById("PassOK").style.display="block";
            document.getElementById("PassOK").style.color = "green";
            await sleep(3000);
            setStatus(false)
            window.location.reload();
        }
        
    }

    function changePass(value)
    {
        document.getElementById("PassError").style.display = "none";
        setLoading(false)
        setPassword(value)
    }

    function changeName(value)
    {
        let val = value.trim()
        value=value.replace("*","").replace("-","").replace("+","").replace("=","").replace(";","").replace(",","").replace("\\","").replace("?","").replace("!","").replace("@","").replace("#","").replace("¨","").replace("(","").replace(")","").replace("%","").replace("$","").replace("_","").replace("º","").replace("ª","").replace(".","").replace("[","").replace("]","").replace("{","").replace("}","").replace("<","").replace(">","").replace("|","").replace("'","").replace('"',"").replace("§","").replace("°","").replace("&","").replace(":","").replace("¹","").replace("²","").replace("³","").replace("£","").replace("¢","").replace("¢","").replace("¬","").replace("©","").replace("/")
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

    function changePetName(value)
    {
        let val = value.trim()
        value=value.replace("*","").replace("-","").replace("+","").replace("=","").replace(";","").replace(",","").replace("\\","").replace("?","").replace("!","").replace("@","").replace("#","").replace("¨","").replace("(","").replace(")","").replace("%","").replace("$","").replace("_","").replace("º","").replace("ª","").replace(".","").replace("[","").replace("]","").replace("{","").replace("}","").replace("<","").replace(">","").replace("|","").replace("'","").replace('"',"").replace("§","").replace("°","").replace("&","").replace(":","").replace("¹","").replace("²","").replace("³","").replace("£","").replace("¢","").replace("¢","").replace("¬","").replace("©","").replace("/")
        if(val.length>0)
        {
            if(val.length<=35){
                setTempPetName(value)
            }
        }
        else{
            setTempPetName(val)
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

    function mascaraDeTelefone(telefone){
        let textoAjustado=telefone.replace(/\-/g, '');
        textoAjustado=textoAjustado.replace(/\(/g, '');
        textoAjustado=textoAjustado.replace(/\)/g, '');
        const isCelular = textoAjustado.length === 11?true:false;
        console.log(isCelular)
        if(isCelular) {
            if(textoAjustado.length===11){
            const parte0 = textoAjustado.slice(0,2)   
            const parte1 = textoAjustado.slice(2,7);
            const parte2 = textoAjustado.slice(7,12);
            textoAjustado = `(${parte0})${parte1}-${parte2}`
            setTempContato(textoAjustado); 
            }
        } else {
            if(textoAjustado.length===10){
            const parte0 = textoAjustado.slice(0,2) 
            const parte1 = textoAjustado.slice(2,6);
            const parte2 = textoAjustado.slice(6,10);
            textoAjustado = `(${parte0})${parte1}-${parte2}`
            setTempContato(textoAjustado); 
            }
        }if(textoAjustado.length<10){
            setTempContato(textoAjustado); 
        }
       
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    return(
        <Container>
            <StyledForm onSubmit={handleSubmit}>
            <p id="PassError">Senha incorreta!</p><br/>
            <p id="PassOK">Alterado com sucesso!</p><br/>
            <p id="emailError">Email Invalido!</p>
            <StyledH3>DADOS</StyledH3>
            <StyledLabel>Proprietário:</StyledLabel><br/>
            <StyledInput type="text" value={tempName} onChange={event => changeName(event.target.value)}/>
            <StyledLabel>Petshop:</StyledLabel><br/>
            <StyledInput type="text" value={tempPetName} onChange={event => changePetName(event.target.value)}/>
            <StyledLabel>Contato:</StyledLabel><br/>
            <StyledInput type="text" value={tempContato} onChange={event => mascaraDeTelefone(event.target.value)}/>
            <StyledLabel>Email:</StyledLabel><br/>
            <StyledInput type="text" value={tempEmail} disabled/>
            <StyledP id="changePass" onClick={handleEditPassword}>Alterar Senha?</StyledP><br/>
            <StyledLabel id='NewPasswordOld'>Antiga Senha:</StyledLabel><br/>
            <StyledInput id='NewPasswordOldInput'type="password" onChange={event => changePass(event.target.value)}/>
            <StyledLabel id='NewPasswordNew'>Nova Senha:</StyledLabel><br/>
            <StyledInput id='NewPasswordNewInput'type="password" onChange={event => setNewPassword(event.target.value)}/>
            <StyledLabel id='confirmPasswordInput'>Senha para confirmar:</StyledLabel><br/>
            <StyledInput id='confirmPassword'type="password" onChange={event => changePass(event.target.value)}/>
            <ContainerBtn>
                <StyledButton>Salvar</StyledButton>
                {loading?<boots.Spinner animation="border" />:<></>}
            </ContainerBtn>
        </StyledForm>
        </Container>
    )
}
