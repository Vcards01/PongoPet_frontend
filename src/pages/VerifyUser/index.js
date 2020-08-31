import React from 'react'
import {Container,StyledP} from './styled'
import {StyledButton} from '../../components/GlobalComponents/styeld'
import api from "../../services/api"
import { useHistory} from "react-router-dom";

export default function({setNavStatus,setFooterStatus}){
    setFooterStatus("verificar")
    setNavStatus("verificar")
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
            const response = await api.post("/user/confirm",{token:token,email:email,type:type})
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
    
    return(
        <Container>
            <h2>Clique no botão para  confirmar seu email!</h2>
            <StyledButton small={true} onClick={handleSubmit}>Confirmar</StyledButton>
            <StyledP id="TokenErro">Token invalido!</StyledP>
            <StyledP id="TokenOK">Confirmado com sucesso!</StyledP>
        </Container>
    )
}