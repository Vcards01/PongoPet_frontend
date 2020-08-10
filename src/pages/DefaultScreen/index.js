import React from 'react'
import {StyledImg,Container,StyledButton,StyledP} from './styled'
import img from "./../../assets/404-error-animate.svg"
import history from "../../history"

export default function({setNavStatus}){
    setNavStatus("default")
    function handleInit()
    {
        history.push("/")
    }

    return(
        <>
            <Container>
                <StyledP>Opss! Algo deu errado!<br/>Este endereço não existe</StyledP>
                <StyledImg src={img}/>
                <StyledButton onClick={handleInit}>Voltar para tela inicial!</StyledButton>
            </Container>
        </>
    )
}