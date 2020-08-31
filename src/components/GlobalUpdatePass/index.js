import React, {useState} from "react";
import api from '../../services/api'
import {Container,SubContainer,StyledForm ,StyledInput,StyledButton,StyledLabel,Styledp} from './styled'

export default function({setStatus}){
    const[typeUser,setTypeUser] = useState("")
    const[email,setEmail] = useState("")

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function handleSubmit(event)
    {
        event.preventDefault();
        const response= await api.post("/user/update_pass",{email:email,type:typeUser})
        if(response.data.status==="400"){
            if(response.data.error==="USUÁRIO NÃO CONFIRMADO")
            {
                document.getElementById("erro1").style.display="block"
                await sleep(4000);
                setStatus(false)
                document.getElementById("erro1").style.display="none"
            }
            else{
                document.getElementById("erro").style.display="block"
            }
        }
        else{
            document.getElementById("sucess").style.display="block"
            document.getElementById("sucess").style.color="green"
            await sleep(4000);
            setStatus(false)
        }
    }


    return(
        <Container>
            <StyledForm onSubmit={handleSubmit}>
                <Styledp id="erro">Usuário não cadastrado!</Styledp>
                <Styledp id="erro1">Usuário não confirmado,um email de confirmação foi enviado!</Styledp>
                <Styledp id="sucess">Um email para mudar a senha foi enviado!</Styledp>
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
                <StyledLabel>Email:</StyledLabel>
                        <StyledInput type="email" 
                                     name="email"
                                     placeholder="Seu melhor email!" 
                                     onChange={event => setEmail(event.target.value)}
                                     required
                        />
                <StyledButton id="enviar">Enviar</StyledButton>
            </StyledForm>
        </Container>
    )
}